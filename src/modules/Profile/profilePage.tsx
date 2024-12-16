import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import OwnAward from "./components/ownAward";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto p-5 space-y-5">
        <section className="space-y-2.5">
          <div>
            <h1 className="text-4xl font-bold">โปรไฟล์ของฉัน</h1>
            <p>ดูและจัดการข้อมูลของคุณ</p>
          </div>
        </section>
        <div className="flex space-x-2.5">
          <Link to="/profile/add-award">
            <Button>เพิ่มผลงาน</Button>
          </Link>
          <Link to="/profile/add-award">
            <Button>เพิ่ม Portfolio</Button>
          </Link>
        </div>
        <section className="space-y-2.5">
          <h2 className="text-2xl font-bold">ผลงานของฉัน</h2>
          <OwnAward />
        </section>
      </main>
    </>
  );
}
