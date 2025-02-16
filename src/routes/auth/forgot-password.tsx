import {
  createFileRoute,
  lazyRouteComponent,
  redirect,
} from "@tanstack/react-router";

export const Route = createFileRoute("/auth/forgot-password")({
  component: lazyRouteComponent(
    () => import("@/modules/Auth/forgotPasswordPage")
  ),
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/profile",
      });
    }
  },
});
