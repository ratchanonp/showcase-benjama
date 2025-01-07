import StoryCard from "@/components/StoryCard/StoryCard";
import { useGetStoriesByCategoryQuery } from "@/features/story/storySlice";
import {
  categories,
  defaultCategory,
} from "@/modules/Category/components/CategoriesNav";
import { getRouteApi } from "@tanstack/react-router";
import { NewspaperIcon } from "lucide-react";
import CategoryNav from "./CategoryNav";

export default function StoryGrid() {
  const route = getRouteApi("/");
  const { category } = route.useSearch();
  const activeCategory = category || defaultCategory.categoryId;
  const { data } = useGetStoriesByCategoryQuery(activeCategory);

  return (
    <div>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 space-x-4 flex items-center">
        <NewspaperIcon className="w-8 h-8 md:w-12 md:h-12 text-neutral-500" />
        <h2 className="text-2xl font-semibold">เรื่องราว</h2>
      </section>
      <CategoryNav />
      <main className="bg-neutral-100">
        <div
          id="wrapper"
          className="max-w-screen-xl mx-auto p-4 md:p-8 space-y-4 min-h-80"
        >
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">
              {
                categories.find(
                  (category) => category.categoryId === activeCategory
                )?.categoryName
              }
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {!data || data.length === 0 ? (
              <div className="col-span-full row-span-full text-center min-h-20 flex items-center justify-center bg-white rounded-lg ">
                ไม่มีข้อมูล
              </div>
            ) : (
              data.map((story) => <StoryCard key={story.id} story={story} />)
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
