import {
  createLazyFileRoute,
  lazyRouteComponent,
} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/award/")({
  component: lazyRouteComponent(() => import("@/modules/Award/awardPage")),
});
