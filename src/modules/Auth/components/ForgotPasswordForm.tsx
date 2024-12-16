import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthError, sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email({ message: "อีเมลล์ไม่ถูกต้อง" }),
});

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success("ส่งอีเมลรีเซ็ตรหัสผ่านสำเร็จ");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการส่งอีเมลรีเซ็ตรหัสผ่าน", {
        description: (error as AuthError).message,
      });
    }
  }

  return (
    <div className="space-y-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>อีเมล</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@benjama.ac.th"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full mt-5">
              รีเซ็ตรหัสผ่าน
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
