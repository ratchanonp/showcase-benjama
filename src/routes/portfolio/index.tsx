import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/")({
  component: lazyRouteComponent(
    () => import("@/modules/Portfolio/Portfolio.index.page")
  ),
});
