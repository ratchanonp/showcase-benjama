import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/$portfolioId")({
  component: lazyRouteComponent(
    () => import("@/modules/Portfolio/Portfolio.page")
  ),
});
