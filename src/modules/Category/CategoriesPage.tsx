import StoryCard from "@/components/StoryCard/StoryCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MainLayout from "@/layouts/MainLayout";
import { useGetStoriesByCategoryQuery } from "../../features/story/storySlice";
import CategoriesNav, {
  categories,
  defaultCategory,
} from "./components/CategoriesNav";

export default function CategoriesPage() {
  const activeCategory = defaultCategory.categoryId;
  const { data } = useGetStoriesByCategoryQuery(activeCategory);
  return (
    <MainLayout>
      <CategoriesNav />
      <main className="bg-neutral-100">
        <div
          id="wrapper"
          className="max-w-screen-xl mx-auto px-8 py-8 space-y-4"
        >
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">
              {
                categories.find(
                  (category) => category.categoryId === activeCategory
                )?.categoryName
              }
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost">เรียงตาม</Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {data?.map((story, index) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
