import {
  createFileRoute,
  lazyRouteComponent,
  redirect,
} from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signUp")({
  component: lazyRouteComponent(() => import("@/modules/Auth/signUpPage")),
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/profile",
      });
    }
  },
});
