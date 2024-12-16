import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/add-award")({
  component: lazyRouteComponent(() => import("@/modules/Profile/addAwardPage")),
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/auth/signIn",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
