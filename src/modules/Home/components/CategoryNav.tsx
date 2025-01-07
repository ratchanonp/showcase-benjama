import {
  categories,
  defaultCategory,
} from "@/modules/Category/components/CategoriesNav";
import { getRouteApi, Link } from "@tanstack/react-router";

export default function CategoryNav() {
  const route = getRouteApi("/");
  const { category } = route.useSearch();
  const activeCategory = category || defaultCategory.categoryId;

  return (
    <header className="border-y sticky top-0 bg-white">
      <nav className="max-w-screen-xl mx-auto flex space-x-4 px-4 overflow-x-auto">
        {categories.map((category) => (
          <Link
            to={"."}
            search={{ category: category.categoryId }}
            key={category.categoryId}
            className={`${activeCategory === category.categoryId ? "border-b-2 border-neutral-800 font-semibold" : " text-neutral-500"} flex text-nowrap h-full py-4`}
          >
            {category.categoryName}
          </Link>
        ))}
      </nav>
    </header>
  );
}
