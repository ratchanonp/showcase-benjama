import { getRouteApi, Link } from "@tanstack/react-router";
import { categories, defaultCategory } from "./CategoriesNav";

export default function CategoryNav() {
  const route = getRouteApi("/category/$categoryId");
  const { categoryId } = route.useParams();
  const activeCategory = categoryId || defaultCategory.categoryId;

  return (
    <header className="border-y sticky top-0 bg-white">
      <nav className="max-w-screen-xl mx-auto flex space-x-4 px-8 ">
        {categories.map((category) => (
          <Link
            to={`/category/${category.categoryId}`}
            key={category.categoryId}
            className={`${activeCategory === category.categoryId ? "border-b-2 border-neutral-800 font-semibold" : " text-neutral-500"} flex h-full py-4`}
          >
            {category.categoryName}
          </Link>
        ))}
      </nav>
    </header>
  );
}
