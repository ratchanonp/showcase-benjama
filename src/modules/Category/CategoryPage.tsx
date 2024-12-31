import StoryCard from "@/components/StoryCard/StoryCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MainLayout from "@/layouts/MainLayout";
import { getRouteApi } from "@tanstack/react-router";
import { useGetStoriesByCategoryQuery } from "../../features/story/storySlice";
import { categories, defaultCategory } from "./components/CategoriesNav";
import CategoryNav from "./components/CategoryNav";

export default function CategoryPage() {
  const route = getRouteApi("/category/$categoryId");
  const { categoryId } = route.useParams();
  const activeCategory = categoryId || defaultCategory.categoryId;
  const { data } = useGetStoriesByCategoryQuery(activeCategory);
  return (
    <MainLayout>
      <CategoryNav />
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
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">เรียงตาม</Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {data?.map((story, index) => <StoryCard story={story} />)}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
