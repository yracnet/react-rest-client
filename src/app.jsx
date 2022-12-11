import { Suspense } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import routes from "virtual:generated-pages-react";
import AwaitLayout from "./_/layout/await";
//import routes from "./routes";

function AppRoutes() {
  return useRoutes(routes);
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AwaitLayout />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};
//export const appRouter = createBrowserRouter(routes);
export const appRouter = createHashRouter(routes);
export const AppRouterProvider = () => {
  return (
    <Suspense fallback={<AwaitLayout />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};
