import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { BackpackIcon } from "lucide-react";
import LoginForm from "./components/LoginForm";
import { Button } from "@/components/ui/button";

export default function signInPage() {
  return (
    <div className="min-h-screen p-5 mx-auto space-y-10 justify-center items-center flex max-w-[400px]">
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex items-end">
          <BackpackIcon className="w-20 h-20 text-red-500" />
          <h1 className="text-4xl font-black text-left ml-2.5 text-red-500 leading-7">
            WEBBEN
            <br />
            <span className="text-lg font-medium text-neutral-800">
              Benjamarachutit
            </span>
          </h1>
        </div>
        <Card className="mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-2xl">เข้าสู่ระบบ</CardTitle>
            <CardDescription>กรุณากรอกอีเมลและรหัสผ่านของคุณ</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <Separator className="mb-5" />
          <CardFooter>
            <p className="text-sm text-center text-gray-500">
              หากยังไม่มีบัญชีผู้ใช้{" "}
              <Link to="/auth/signUp" className="text-red-500">
                สร้างบัญชีผู้ใช้
              </Link>
            </p>
          </CardFooter>
        </Card>
        <Button variant="link">
          <Link to="/">กลับสู่หน้าหลัก</Link>
        </Button>
      </div>
    </div>
  );
}
