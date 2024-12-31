import {
  createFileRoute,
  lazyRouteComponent,
  redirect,
} from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
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
  component: lazyRouteComponent(() => import("@/modules/Profile/ProfilePage")),
});
