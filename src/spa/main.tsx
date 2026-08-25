import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// SPA root route (no SSR HeadContent/Scripts/shellComponent)
import { Route as rootRoute } from "./root";
// Reuse the same page-level route modules — they don't use any SSR APIs
import { Route as IndexRouteImport } from "@/routes/index";
import { Route as PropertyIdRouteImport } from "@/routes/property.$id";

import "@/styles.css";

// Wire up routes to the SPA root
const IndexRoute = IndexRouteImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as never);

const PropertyIdRoute = PropertyIdRouteImport.update({
  id: "/property/$id",
  path: "/property/$id",
  getParentRoute: () => rootRoute,
} as never);

const routeTree = rootRoute._addFileChildren([IndexRoute, PropertyIdRoute]);

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <RouterProvider router={router} context={{ queryClient }} />
    </React.StrictMode>,
  );
}
