import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import RootLayout from "./layout/RootLayout";
import TraillerModelProvider from "@/context/TraillerModelProvider";
import SearchPage from "@/pages/SearchPage";

const MovieDetail = lazy(() => import("@/pages/MovieDetail"))
const TVShowDetail = lazy(() => import("@/pages/TVShowDetail"))
const PeoplePage = lazy(() => import("@/pages/PeoplePage"))

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            },
          );

          return res;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TraillerModelProvider>
      <RouterProvider router={router} />
    </TraillerModelProvider>
  </StrictMode>,
);
