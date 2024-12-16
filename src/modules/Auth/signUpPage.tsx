import { Button } from "@/components/ui/button";
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
import RegisterForm from "./components/RegisterForm";

export default function signUpPage() {
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
            <CardTitle className="text-2xl">สร้างบัญชีผู้ใช้</CardTitle>
            <CardDescription>
              กรุณากรอกข้อมูลของคุณเพื่อสร้างบัญชีผู้ใช้
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
          <Separator className="mb-5" />
          <CardFooter>
            <p className="text-sm text-center text-gray-500">
              หากมีบัญชีอยู่แล้ว{" "}
              <Link to="/auth/signIn" className="text-red-500">
                เข้าสู่ระบบ
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
