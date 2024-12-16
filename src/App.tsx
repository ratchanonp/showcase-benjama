import { RouterProvider } from "@tanstack/react-router";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { router } from "./router";

function InnerApp() {
  const auth = useContext(AuthContext);

  return (
    <RouterProvider
      router={router}
      context={{
        auth,
      }}
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}
