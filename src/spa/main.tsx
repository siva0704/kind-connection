import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

import { Route as rootRoute } from "./root";
import { Route as IndexRouteImport } from "@/routes/index";
import { Route as PropertyIdRouteImport } from "@/routes/property.$id";

import "@/styles.css";

// Wire page routes to the SPA root (no SSR HeadContent / Scripts / shellComponent)
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
  // Tell the router the base path matches the GH Pages deployment sub-path.
  // Without this, navigating to /property/xyz resolves against / not /kind-connection/
  // and produces a network error fetching JS chunks.
  basepath: import.meta.env.BASE_URL,
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
