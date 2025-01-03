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
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/contexts/AuthContext";
import { AddStoryPayload } from "@/features/story/storyFirebase";
import {
  useAddStoryMutation,
  useSetFeatureImageMutation,
} from "@/features/story/storySlice";
import { storage } from "@/lib/firebase";
import { categories } from "@/modules/Category/components/CategoriesNav";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Loader2 } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { AddStoryDialogContext } from "./contexts/AddStoryDialogContext";

const addStoryFormSchema = z.object({
  title: z
    .string({
      message: "กรุณากรอกชื่อเรื่อง",
    })
    .min(1, {
      message: "กรุณากรอกชื่อเรื่อง",
    })
    .max(100, {
      message: "ความยาวของชื่อเรื่องไม่เกิน 100 ตัวอักษร",
    }),
  content: z
    .string({
      message: "กรุณากรอกเนื้อหาเรื่องราว",
    })
    .min(1, {
      message: "กรุณากรอกเนื้อหาเรื่องราว",
    })
    .max(1000, {
      message: "ความยาวของเนื้อหาเรื่องราวไม่เกิน 1000 ตัวอักษร",
    }),
  image: z
    .instanceof(File, {
      message: "กรุณาเลือกรูปภาพ",
    })
    .superRefine((value, ctx) => {
      // Check has file
      if (value.size === 0) {
        ctx.addIssue({
          code: "custom",
          message: "กรุณาเลือกรูปภาพ",
        });
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
  categoryId: z
    .string()
    .nonempty({ message: "กรุณาเลือกหมวดหมู่" })
    .refine(
      (value) => {
        return categories.some((category) => category.categoryId === value);
      },
      { message: "หมวดหมู่ไม่ถูกต้อง" }
    ),
});

export default function AddStoryForm() {
  const { setOpen } = useContext(AddStoryDialogContext);
  const { user } = useContext(AuthContext);
  const [addStory] = useAddStoryMutation();
  const [setFeatureImage] = useSetFeatureImageMutation();

  const form = useForm<z.infer<typeof addStoryFormSchema>>({
    resolver: zodResolver(addStoryFormSchema),
    defaultValues: {
      title: "",
      content: "",
      image: new File([], ""),
      categoryId: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof addStoryFormSchema>) {
    const story: AddStoryPayload = {
      title: data.title,
      content: data.content,
      categoryId: data.categoryId,
      authorId: user!.uid,
      authorName: user!.displayName!,
    };

    let docRef;
    await addStory(story)
      .unwrap()
      .then((id) => {
        docRef = id;
      })
      .catch((error) => {
        toast.error("เกิดข้อผิดพลาดในการเพิ่มเรื่องราว", {
          description: error.message,
        });
      });

    if (!docRef) {
      throw new Error("Cannot get story id");
      return;
    }

    await uploadBytes(ref(storage, `stories/${docRef}`), data.image);
    const downloadURL = await getDownloadURL(ref(storage, `stories/${docRef}`));

    await setFeatureImage({ storyId: docRef, imageUrl: downloadURL })
      .unwrap()
      .then(() => {
        toast.success("เพิ่มเรื่องราวเรียบร้อยแล้ว");
      })
      .catch((error) => {
        toast.error("เกิดข้อผิดพลาดในการอัพโหลดรูปภาพ", {
          description: error.message,
        });
      });

    setOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อเรื่อง</FormLabel>
              <FormControl>
                <Input {...field} placeholder="กรอกหัวข้อเรื่องราว" />
              </FormControl>
              <FormDescription>ชื่อเรื่องไม่เกิน 100 ตัวอักษร</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>เนื้อหา</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={10}
                  placeholder="กรอกเนื้อหาเรื่องราว"
                />
              </FormControl>
              <FormDescription>
                บอกเรื่องราวของคุณให้เข้าใจง่ายและน่าสนใจ ไม่เกิน 1000 ตัวอักษร
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>รูปภาพ</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    field.onChange(e.target.files![0]);
                  }}
                />
              </FormControl>
              <FormDescription>
                รูปภาพที่เกี่ยวข้องกับเรื่องราว 1 รูป
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <img
          src={
            form.watch("image") instanceof File
              ? URL.createObjectURL(form.watch("image"))
              : ""
          }
          alt=""
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>หมวดหมู่</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap"
                >
                  {categories.map((category) => (
                    <FormItem className="flex items-end space-x-2 p-2 border rounded space-y-0 has-[data-[state=checked]]:border-neutral-900">
                      <FormControl>
                        <RadioGroupItem
                          value={category.categoryId}
                          className=""
                        />
                      </FormControl>
                      <FormLabel>{category.categoryName}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormDescription>เลือก 1 หมวดหมู่</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
          เพิ่มเรื่องราว
        </Button>
      </form>
    </Form>
  );
}
