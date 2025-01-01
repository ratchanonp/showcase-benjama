import ProfilePage from "@/modules/Profile/ProfilePage";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
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
