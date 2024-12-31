import { categories } from "@/modules/Category/components/CategoriesNav";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

const popularSearchSchema = z.object({
  rankingCategory: fallback(
    z.enum(
      categories.map((category) => category.categoryId).concat(["all"]) as [
        string,
        ...string[],
      ]
    ),
    "all"
  ),
});

export const Route = createFileRoute("/popular/")({
  component: lazyRouteComponent(() => import("@/modules/Popular/PopularPage")),
  validateSearch: zodValidator(popularSearchSchema),
});
