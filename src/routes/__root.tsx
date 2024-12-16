import { IAuthContext } from "@/contexts/AuthContext";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";

export interface RouteContext {
  auth: IAuthContext;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: () => (
    <>
      <Outlet />
      <Toaster richColors />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );
