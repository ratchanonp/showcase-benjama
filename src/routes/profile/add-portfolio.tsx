import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/add-portfolio")({
  component: lazyRouteComponent(
    () => import("@/modules/Profile/addPortfolioPage")
  ),
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
