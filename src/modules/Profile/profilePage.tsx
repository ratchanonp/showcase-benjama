import Navbar from "@/components/navbar";
import AddStoryDialog from "./components/AddStoryDialog";
import MeStory from "./components/MeStory";

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
        </div>
        <section className="space-y-2.5 bg-neutral-50">
          <div className="max-w-screen-xl mx-auto px-5 py-5">
            <h2 className="text-2xl font-bold">ผลงานของฉัน</h2>
            <MeStory />
          </div>
        </section>
      </main>
    </>
  );
}
