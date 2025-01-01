import MainLayout from "@/layouts/MainLayout";
import PortfolioGrid from "./components/PortfolioGrid";

export default function PortfolioIndexPage() {
  return (
    <MainLayout>
      <main>
        <header className=" max-w-screen-xl mx-auto p-4 md:p-8">
          <h1 className="font-bold text-xl">Portfolio</h1>
          <p className="text-sm text-neutral-500">ตัวอย่างแฟ้มผลงาน</p>
        </header>
        <section className="bg-neutral-50">
          <div className="max-w-screen-xl mx-auto p-4 md:p-8">
            <PortfolioGrid />
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
