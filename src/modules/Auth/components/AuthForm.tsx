import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";

export default function AuthForm() {
  return (
    <Tabs defaultValue="signin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">เข้าสู่ระบบ</TabsTrigger>
        <TabsTrigger value="register">สร้างบัญชีผู้ใช้</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">เข้าสู่ระบบ</CardTitle>
            <CardDescription>กรุณากรอกอีเมลและรหัสผ่านของคุณ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">อีเมลล์</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">รหัสผ่าน</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    ลืมรหัสผ่าน?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">สร้างบัญชีผู้ใช้</CardTitle>
            <CardDescription>
              กรุณากรอกข้อมูลของคุณเพื่อสร้างบัญชีผู้ใช้
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
