import Navbar from "@/components/navbar";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AuthContext } from "@/contexts/AuthContext";
import { db, storage } from "@/lib/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

/**
 * - ช่ือรายการการแข่งขัน
 * - ชื่องาน
 * - ชื่อรางวัล
 * - ปีที่เข้าร่วม
 * - File รูปภาพเกียรติบัตร
 */

const awardTypes = [
  {
    value: "academic",
    label: "วิชาการ",
  },
  {
    value: "athletic",
    label: "กีฬา",
  },
];

const formSchema = z.object({
  awardType: z
    .string()
    .nonempty()
    .refine(
      (value) => {
        return awardTypes.some((awardType) => awardType.value === value);
      },
      { message: "ประเภทรางวัลไม่ถูกต้อง" }
    ),
  competitionName: z.string().nonempty(),
  eventName: z.string().nonempty(),
  awardName: z.string().nonempty(),
  studentFullName: z.string().nonempty(),
  year: z.coerce.number().int(),
  certificateImage: z.instanceof(File),
});

export interface Portfolio
  extends Omit<z.infer<typeof formSchema>, "certificateImage"> {
  id: string;
  userId: string;
  certificateImage: string;
}

export default function AddPortfolioPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { user } = useContext(AuthContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      awardType: awardTypes[0].value,
      competitionName: "",
      eventName: "",
      awardName: "",
      year: 0,
      studentFullName: "",
      certificateImage: new File([], ""),
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const {
      competitionName,
      eventName,
      awardName,
      year,
      certificateImage,
      awardType,
      studentFullName,
    } = data;

    try {
      const docRef = await addDoc(collection(db, "awards"), {
        type: awardType,
        userId: user?.uid,
        competitionName,
        eventName,
        awardName,
        year,
        studentFullName,
      });

      const storageRef = ref(storage, `certificates/${docRef.id}`);

      await uploadBytes(storageRef, certificateImage);
      const downloadURL = await getDownloadURL(storageRef);

      await updateDoc(docRef, {
        certificateImage: downloadURL,
      });

      toast.success("เพิ่มข้อมูลเรียบร้อยแล้ว");
      form.reset();
      setImagePreview(null);
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", {
        description: (error as FirebaseError).message,
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto p-5">
        <h1 className="text-2xl font-semibold">เพิ่มผลงาน</h1>
        <section>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="awardType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ประเภทรางวัล</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex space-x-2"
                      >
                        {awardTypes.map((awardType) => (
                          <FormItem className="flex items-end space-x-2">
                            <FormControl>
                              <RadioGroupItem value={awardType.value} />
                            </FormControl>
                            <FormLabel>{awardType.label}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="awardName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อรางวัล</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      ชื่อรางวัลที่ได้รับ เช่น รางวัลชนะเลิศ รางวัลชมเชย
                      รางวัลอันดับ 1
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="competitionName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อรายการการแข่งขัน</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      ชื่อรายการการแข่งขันที่เข้าร่วม เช่น
                      การแข่งขันโครงงานคอมพิวเตอร์
                      การแข่งขันอัจฉริยภาพวิทยาศาสตร์
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eventName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่องาน</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      ชื่องานที่เข้าร่วม เช่น งานสัปดาห์วิทยาศาสตร์
                      งานมหกรรมวิชาการมัธยมศึกษา
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ปีที่เข้าร่วม</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      ปีที่เข้าร่วมการแข่งขัน เช่น 2564 2565
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="studentFullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อนักเรียน</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      ชื่อนักเรียนที่ได้รับรางวัล
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="certificateImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File รูปภาพเกียรติบัตร</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          field.onChange(e.target.files?.[0]);
                          handleImageChange(e);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      รูปภาพเกียรติบัตรที่ได้รับ
                    </FormDescription>
                    <FormMessage />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Certificate Preview"
                        className="mt-4 max-h-60"
                      />
                    )}
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                เพิ่มผลงาน
              </Button>
            </form>
          </Form>
        </section>
      </main>
    </>
  );
}
