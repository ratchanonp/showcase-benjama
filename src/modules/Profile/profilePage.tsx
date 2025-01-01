import Navbar from "@/components/navbar";
import AddPortfolioDialog from "./components/Portfolio/AddPortfolioDialog";
import MePortfolio from "./components/Portfolio/MePortfolio";
import AddStoryDialog from "./components/Story/AddStoryDialog";
import MeStory from "./components/Story/MeStory";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="space-y-5">
        <section className="space-y-2.5 max-w-screen-xl mx-auto px-5 pt-5">
          <div>
            <h1 className="text-4xl font-bold">โปรไฟล์ของฉัน</h1>
            <p>ดูและจัดการข้อมูลของคุณ</p>
          </div>
        </section>
        <div className="flex space-x-2.5 max-w-screen-xl mx-auto px-5">
          <AddStoryDialog />
          <AddPortfolioDialog />
        </div>
        <section className="space-y-2.5 bg-neutral-50">
          <div className="max-w-screen-xl mx-auto px-5 py-5 space-y-4">
            <div>
              <h2 className="text-2xl font-bold">ผลงานของฉัน</h2>
              <MeStory />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Portfolio ของฉัน</h2>
              <MePortfolio />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
