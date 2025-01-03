import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/contexts/AuthContext";
import {
  useAddPortfolioMutation,
  useSetCoverImageMutation,
  useSetPdfMutation,
} from "@/features/portfolio/portfolioSlice";
import { storage } from "@/lib/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { RefreshCcw, UploadCloud } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { AddPortfolioDialogContext } from "./context/AddPortfolioDialogContext";

const addPortfolioFormSchema = z.object({
  producer: z
    .string({ message: "กรุณากรอกชื่อผู้จ้ดทำ" })
    .nonempty({ message: "กรุณากรอกชื่อผู้จัดทำ" }),
  department: z
    .string({ message: "กรุณากรอกชื่อสาขา" })
    .nonempty({ message: "กรุณากรอกชื่อสาขา" }),
  faculty: z
    .string({ message: "กรุณากรอกชื่อคณะ" })
    .nonempty({ message: "กรุณากรอกชื่อคณะ" }),
  university: z
    .string({ message: "กรุณากรอกชื่อมหาวิทยาลัย" })
    .nonempty({ message: "กรุณากรอกชื่อมหาวิทยาลัย" }),
  year: z
    .string({ message: "กรุณากรอกปีที่ืืยื่น" })
    .nonempty({ message: "กรุณากรอกปีที่ืืยื่น" }),
  coverImage: z
    .instanceof(File, { message: "กรุณาเลือกรูปภาพ" })
    .superRefine((value, ctx) => {
      if (value.size === 0) {
        ctx.addIssue({ code: "custom", message: "กรุณาเลือกรูปภาพ" });
      }
      if (value.size > 5 * 1024 * 1024) {
        ctx.addIssue({
          code: "too_big",
          message: "รูปภาพต้องมีขนาดไม่เกิน 5 MB",
          inclusive: true,
          type: "string",
          maximum: 5 * 1024 * 1024,
        });
      }
    }),
  pdf: z
    .instanceof(File, { message: "กรุณาเลือกไฟล์ PDF" })
    .superRefine((value, ctx) => {
      if (value.size === 0) {
        ctx.addIssue({ code: "custom", message: "กรุณาเลือกไฟล์ PDF" });
      }
      if (value.size > 10 * 1024 * 1024) {
        ctx.addIssue({
          code: "too_big",
          message: "ไฟล์ PDF ต้องมีขนาดไม่เกิน 10 MB",
          inclusive: true,
          type: "string",
          maximum: 10 * 1024 * 1024,
        });
      }
    }),
});

export default function AddPortfolioForm() {
  const { user } = useContext(AuthContext);
  const { setOpen } = useContext(AddPortfolioDialogContext);
  const [addPortfolio] = useAddPortfolioMutation();
  const [setCoverImage] = useSetCoverImageMutation();
  const [setPdf] = useSetPdfMutation();

  const form = useForm<z.infer<typeof addPortfolioFormSchema>>({
    resolver: zodResolver(addPortfolioFormSchema),
    defaultValues: {
      producer: "",
      department: "",
      faculty: "",
      university: "",
      year: "",
      coverImage: new File([], ""),
      pdf: new File([], ""),
    },
  });

  async function handleSubmit(data: z.infer<typeof addPortfolioFormSchema>) {
    try {
      if (!user) return;
      const { coverImage, pdf, ...payload } = data;

      const portfolioId = await addPortfolio({
        ...payload,
        authorId: user.uid!,
        authorName: user.displayName!,
      })
        .unwrap()
        .then((res) => res);

      if (!portfolioId) throw new Error("Failed to add portfolio");

      await uploadBytes(
        ref(storage, `portfolio/${portfolioId}/coverImage`),
        coverImage
      );
      const coverImageUrl = await getDownloadURL(
        ref(storage, `portfolio/${portfolioId}/coverImage`)
      );

      if (!coverImageUrl) throw new Error("Failed to upload cover image");

      await setCoverImage({ portfolioId, imageUrl: coverImageUrl });

      await uploadBytes(ref(storage, `portfolio/${portfolioId}/pdf`), pdf);
      const pdfUrl = await getDownloadURL(
        ref(storage, `portfolio/${portfolioId}/pdf`)
      );

      if (!pdfUrl) throw new Error("Failed to upload PDF");

      await setPdf({ portfolioId, pdfUrl });

      setOpen(false);
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการเพิ่ม Portfolio", {
        description: (error as Error).message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className=" space-y-4">
        <FormField
          control={form.control}
          name="producer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อผู้จัดทำ</FormLabel>
              <FormControl>
                <Input autoComplete="producer" {...field} />
              </FormControl>
              <FormDescription>
                ชื่อผู้จัดทำหรือผู้ที่ยื่น Portfolio นี้ กรอกชื่อเต็มภาษาไทย
                ไม่ต้องใส่คำนำหน้า
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>สาขาวิชา</FormLabel>
              <FormControl>
                <Input autoComplete="department" {...field} />
              </FormControl>
              <FormDescription>ชื่อสาขาวิชาที่ยืนยันสิทธิ์</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="faculty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>คณะ</FormLabel>
              <FormControl>
                <Input autoComplete="faculty" {...field} />
              </FormControl>
              <FormDescription>ชื่อคณะที่ยืนยันสิทธิ์</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>มหาวิทยาลัย</FormLabel>
              <FormControl>
                <Input autoComplete="university" {...field} />
              </FormControl>
              <FormDescription>ชื่อมหาวิทยาลัยที่ยืนยันสิทธิ์</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ปีที่ยื่น</FormLabel>
              <FormControl>
                <Input autoComplete="submit_year" {...field} />
              </FormControl>
              <FormDescription>ปีที่ยื่น Portfolio</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                รูปปก
                {form.watch("coverImage") instanceof File &&
                form.watch("coverImage").size > 0 ? (
                  <div className="relative border-2 border-neutral-200 rounded-lg group overflow-hidden">
                    <img
                      src={
                        form.watch("coverImage") instanceof File
                          ? URL.createObjectURL(form.watch("coverImage"))
                          : ""
                      }
                      alt=""
                      className="max-w-full aspect-[3/4] object-cover"
                    />
                    {/* Text Overlay when hover เปลี่ยนรูป */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-70 text-white flex-col space-y-2">
                      <RefreshCcw size={48} strokeWidth={2} />
                      <p>เปลี่ยนรูปภาพ</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-[3/4] flex flex-col justify-center items-center bg-neutral-50 space-y-2 border-2 border-dashed cursor-pointer rounded-lg hover:border-neutral-400 hover:bg-neutral-100">
                    <UploadCloud size={48} strokeWidth={2} />
                    <p>คลิกเพื่อเลือกรูปภาพ หรือลากไฟล์มาวางที่นี่</p>
                    <p className=" text-neutral-400 text-sm">
                      ขนาดรูปภาพไม่เกิน 5 MB และเป็นไฟล์ JPG, PNG
                    </p>
                  </div>
                )}
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files!.length === 0) return;
                      field.onChange(e.target.files![0]);
                    }}
                  />
                </FormControl>
              </FormLabel>
              <FormDescription>รูปภาพปก Portfolio</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pdf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ไฟล์ PDF</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => {
                    field.onChange(e.target.files![0]);
                  }}
                />
              </FormControl>
              <FormDescription>ไฟล์ PDF ของ Portfolio</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting
            ? "กำลังเพิ่ม Portfolio..."
            : "เพิ่ม Portfolio"}
        </Button>
      </form>
    </Form>
  );
}
