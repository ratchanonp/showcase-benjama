import Navbar from "@/components/navbar";
import PortfolioGrid from "./components/PortfolioGrid";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="p-5 space-y-5 max-w-screen-xl mx-auto">
        <header className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">แฟ้มสะสมผลงาน</h1>
            <p className="text-gray-400">
              ค้นหา Portfolio สำหรับยื่นสมัครมหาวิทยาลัยของศิษย์เก่า
            </p>
          </div>
        </header>
        <main>
          <PortfolioGrid />
        </main>
      </div>
    </>
  );
}
