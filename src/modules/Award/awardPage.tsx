import Navbar from "@/components/navbar";
import AwardGrid from "./components/awardGrid";
import FilterDrawer from "./components/filterDrawer";

export default function AwardPage() {
  return (
    <>
      <Navbar />
      <div className="p-5 space-y-5 max-w-screen-xl mx-auto">
        <header className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">ผลงาน</h1>
            <p className="text-gray-400">ค้นหาผลงาน หรือ Portfolio</p>
          </div>
          <FilterDrawer />
        </header>
        <main>
          <AwardGrid />
        </main>
      </div>
    </>
  );
}
