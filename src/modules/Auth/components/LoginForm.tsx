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
import { AuthContext } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRouteApi, Link, useNavigate } from "@tanstack/react-router";
import { AuthError } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email({ message: "อีเมลล์ไม่ถูกต้อง" }),
  password: z
    .string()
    .min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const router = getRouteApi("/auth/signIn");
  const { redirect } = router.useSearch({});
  const { isAuthenticated, login } = useContext(AuthContext);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await login(data.email, data.password);
      toast.success("เข้าสู่ระบบสำเร็จ");
    } catch (error) {
      toast.error("เข้าสู่ระบบไม่สำเร็จ", {
        description: (error as AuthError).message,
      });
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate({
        to: redirect || "/",
      });
    }
  }, [isAuthenticated]);

  return (
    <div className="space-y-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
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
                <FormLabel className="inline-flex justify-between w-full">
                  รหัสผ่าน{" "}
                  <Link to="/auth/forgot-password" className="text-red-500">
                    ลืมรหัสผ่าน?
                  </Link>
                </FormLabel>
                <FormControl>
                  <Input
                    autoComplete="current-password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full mt-5">
              เข้าสู่ระบบ
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
