import { useLazyGetPopularStoryQuery } from "@/features/story/storySlice";
import { categories } from "@/modules/Category/components/CategoriesNav";
import { getRouteApi, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import PopularStoryGrid from "../components/PopularStoryGrid";
import PopularStoryGridLoading from "../components/PopularStoryGrid.Loading";

export default function PopularByCategory() {
  const route = getRouteApi("/popular/");
  const { rankingCategory } = route.useSearch();
  const [getPopularStory, { data: popularStory, isLoading }] =
    useLazyGetPopularStoryQuery();

  useEffect(() => {
    getPopularStory({
      categoryId: rankingCategory !== "all" ? rankingCategory : undefined,
    });
  }, [rankingCategory, getPopularStory]);

  return (
    <section>
      <header className="max-w-screen-xl mx-auto p-8 space-y-4">
        <h2 className="font-semibold">อันดับตามประเภท</h2>
        <nav className="flex flex-row space-x-8">
          {[{ categoryId: "all", categoryName: "ทั้งหมด" }, ...categories].map(
            (category) => (
              <Link
                key={category.categoryId}
                to="."
                search={{ rankingCategory: category.categoryId }}
                className={`${rankingCategory === category.categoryId ? "font-semibold text-neutral-900 underline" : "text-neutral-400"}`}
              >
                {category.categoryName}
              </Link>
            )
          )}
        </nav>
      </header>
      <main className="max-w-screen-xl mx-auto px-8 pb-8 space-y-4">
        {isLoading ? (
          <PopularStoryGridLoading />
        ) : popularStory?.length == 0 || !popularStory ? (
          <p>No stories</p>
        ) : (
          <PopularStoryGrid popularStories={popularStory} />
        )}
      </main>
    </section>
  );
}
