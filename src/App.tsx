import { RouterProvider } from "@tanstack/react-router";
import { useContext } from "react";
import { Provider } from "react-redux";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { router } from "./router";
import { store } from "./store/store";

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
      <Provider store={store}>
        <InnerApp />
      </Provider>
    </AuthProvider>
  );
}
