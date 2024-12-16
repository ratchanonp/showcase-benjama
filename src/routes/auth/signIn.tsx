import {
  createFileRoute,
  lazyRouteComponent,
  redirect,
} from "@tanstack/react-router";

type LoginSearchParams = {
  redirect?: string;
};

export const Route = createFileRoute("/auth/signIn")({
  component: lazyRouteComponent(() => import("@/modules/Auth/signInPage")),
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/profile",
      });
    }
  },
  validateSearch: (search: Record<string, unknown>): LoginSearchParams => {
    return {
      redirect: search.redirect as string | undefined,
    };
  },
});
