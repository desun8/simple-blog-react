import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./app/styles/index.css";
// Import the generated route tree
import { routeTree } from "./app/routes/routeTree.gen";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import { NotFoundPage } from "pages/NotFoundPage";
import { PageLoader } from "shared/ui";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  defaultPendingComponent: PageLoader,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
