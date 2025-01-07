import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BackpackIcon } from "lucide-react";
import PortfolioGrid from "../Portfolio/components/PortfolioGrid";
import StoryGrid from "./components/StoryGrid";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className=" relative min-h-[calc(100svh-73.5px)] bg-[url('/Rama5.png')] bg-cover bg-top">
          <div className="absolute bottom-0 left-0 w-[calc(100vw-24px)] ">
            <div className="max-w-screen-xl mx-auto p-6 space-y-10">
              <BackpackIcon className="w-20 h-20 md:w-32 md:h-32 text-white" />
              <h1 className="text-2xl  text-white drop-shadow-lg">
                <span className="uppercase text-5xl md:text-8xl font-black">
                  WEBBEN
                </span>
                <br />
                Benjamarachutit
              </h1>
              <p className="text-white md:text-xl font-light">
                แพลตฟอร์มเผยแพร่ผลงานเพื่อสร้างแรงบันดาลใจ
                <br />
                และติดตามผลงานทางด้านต่าง ๆ ของนักเรียนโรงเรียนเบญจมราชูทิศ
              </p>
              <div className="flex space-x-2.5">
                <Link to="/category">
                  <Button size="lg" variant="outline">
                    ดูผลงาน
                  </Button>
                </Link>
                <Link to="/profile">
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
        <StoryGrid />
        <section className="max-w-screen-xl mx-auto p-4 md:p-8 space-y-4">
          <div className="flex space-x-4 items-center">
            <BackpackIcon className="w-8 h-8 md:w-12 md:h-12 text-neutral-500" />
            <h2 className="text-2xl font-semibold">Portfolio</h2>
          </div>
          <PortfolioGrid />
        </section>
      </main>
    </>
  );
}
