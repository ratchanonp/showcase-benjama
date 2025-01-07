import { categories } from "@/modules/Category/components/CategoriesNav";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { fallback } from "@tanstack/zod-adapter";
import { z } from "zod";

const IndexSearchSchema = z.object({
  category: fallback(
    z.enum(
      categories.map((category) => category.categoryId) as [string, ...string[]]
    ),
    ""
  ).default(""),
});

export const Route = createFileRoute("/")({
  component: lazyRouteComponent(() => import("@/modules/Home/HomePage")),
  validateSearch: IndexSearchSchema,
});
