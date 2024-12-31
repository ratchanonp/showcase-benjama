import { Link } from "@tanstack/react-router";

export const categories = [
  { categoryId: "math", categoryName: "คณิตศาสตร์" },
  { categoryId: "science-technology", categoryName: "วิทยาศาสตร์และเทคโนโลยี" },
  { categoryId: "language", categoryName: "ภาษา" },
  { categoryId: "sports", categoryName: "กีฬา" },
  { categoryId: "art", categoryName: "ศิลปะ" },
  { categoryId: "music", categoryName: "ดนตรี" },
];

export const defaultCategory = categories[0];

export default function CategoriesNav() {
  const activeCategory = defaultCategory.categoryId;

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
