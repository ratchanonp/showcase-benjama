import { useGetPopularStoryQuery } from "@/features/story/storySlice";
import MainLayout from "@/layouts/MainLayout";
import { Loader2Icon } from "lucide-react";
import PopularByCategory from "./PopularByCategory/PopularByCategory";
import PopularStoryGrid from "./components/PopularStoryGrid";

export default function Popular() {
  const { data: popularStories, isLoading } = useGetPopularStoryQuery({});

  if (isLoading) {
    return (
      <MainLayout>
        <main className="max-w-screen-xl mx-auto p-8 space-y-4 flex flex-col min-h-[calc(100svh-73px)] items-center justify-center">
          <Loader2Icon className="animate-spin w-8 h-8" />
          <p>กำลังโหลดเรื่องที่มีคนสนใจมากที่สุด</p>
        </main>
      </MainLayout>
    );
  }

  if (!popularStories) {
    return <MainLayout>No stories</MainLayout>;
  }

  return (
    <MainLayout>
      <main>
        <section className=" max-w-screen-xl mx-auto p-8 space-y-4">
          <h1 className="font-semibold">เรื่องใหม่มาแรง</h1>
          <PopularStoryGrid popularStories={popularStories} />
        </section>
        <PopularByCategory />
      </main>
    </MainLayout>
  );
}
