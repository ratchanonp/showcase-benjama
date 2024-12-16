import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BackpackIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full relative min-h-[calc(100svh-73.5px)] bg-[url('/Rama5.png')] bg-cover bg-top">
          <div className="absolute bottom-0 left-0 w-screen ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
              <BackpackIcon className="w-20 h-20 md:w-32 md:h-32 text-white" />
              <h1 className="text-2xl  text-white drop-shadow-lg">
                <span className="uppercase text-7xl md:text-8xl font-black">
                  WEBBEN
                </span>
                <br />
                Benjamarachutit
              </h1>
              <p className="text-white text-xl font-light">
                แพลตฟอร์มเผยแพร่ผลงานเพื่อสร้างแรงบันดาลใจ
                <br />
                และติดตามผลงานทางด้านต่าง ๆ ของนักเรียนโรงเรียนเบญจมราชูทิศ
              </p>
              <div className="flex space-x-2.5">
                <Link to="/award">
                  <Button size="lg" variant="outline">
                    ดูผลงาน
                  </Button>
                </Link>
                <Link to="/auth/signIn">
                  <Button
                    size="lg"
                    variant="default"
                    className=" bg-transparent border border-white"
                  >
                    เพิ่มผลงานของตัวเอง
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
