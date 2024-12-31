import { useGetPopularStoryQuery } from "@/features/story/storySlice";
import MainLayout from "@/layouts/MainLayout";
import PopularByCategory from "./PopularByCategory/PopularByCategory";
import PopularStoryGrid from "./components/PopularStoryGrid";

export default function Popular() {
  const { data: popularStories, isLoading } = useGetPopularStoryQuery({});

  if (isLoading) {
    return <MainLayout>Loading...</MainLayout>;
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
