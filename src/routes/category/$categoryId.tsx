import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$categoryId")({
  component: lazyRouteComponent(
    () => import("@/modules/Category/CategoryPage")
  ),
});
