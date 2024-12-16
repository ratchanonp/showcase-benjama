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
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import {
  AuthError,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface FormSchemaType {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormSchema: z.ZodSchema<FormSchemaType> = z
  .object({
    fullname: z
      .string()
      .min(3, { message: "ชื่อ-นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร" }),
    email: z.string().email({ message: "อีเมลล์ไม่ถูกต้อง" }),
    password: z
      .string()
      .min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }),
    confirmPassword: z
      .string()
      .min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "รหัสผ่านไม่ตรงกัน",
        path: ["confirmPassword"],
      });
    }
  });

export default function RegisterForm() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsPending(true);
    try {
      const { email, password } = data;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: data.fullname,
      });

      setIsPending(false);
      toast.success(`สร้างบัญชี ${data.fullname} สำเร็จ`);
      navigate({
        to: "/",
      });
    } catch (error) {
      toast.error((error as AuthError).message);
    }
  }

  return (
    <div className="space-y-5">
      <Button variant="outline" className="w-full">
        Register with Google
      </Button>
      <div className="relative">
        <Separator />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 bg-white text-sm text-gray-500">
          หรือ
        </span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อ-นามสกุล</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รหัสผ่าน</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    autoComplete="new-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full mt-5" disabled={isPending}>
              {isPending && <Loader2 className="animate-spin" />}
              {isPending ? "กำลังสร้างบัญชีผู้ใช้..." : "สร้างบัญชีผู้ใช้"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
