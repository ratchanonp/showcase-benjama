import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/category/")({
  component: lazyRouteComponent(
    () => import("@/modules/Category/CategoriesPage")
  ),
});
