import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import FetchRQ from "./pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FetchIndividual from "./pages/FetchIndividual";
import Pagination from "./pages/Pagination";
import DeleteOp from "./pages/DeleteOp";
import UpdateOp from "./pages/UpdateOp";
import InfiniteScroll from "./pages/InfiniteScroll";
import IntersectionObserver from "./pages/IntersectionObserver";

// Creating routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path:"/rq/:id",
        element: <FetchIndividual />
      },
      {
        path:"/pagination",
        element: <Pagination />
      },
      {
        path:"/delete-op",
        element: <DeleteOp />
      },
      {
        path: "/update-op",
        element: <UpdateOp />
      },
      {
        path: "/infinite",
        element: <InfiniteScroll />
      },
      {
        path: "/intersection-observer",
        element: <IntersectionObserver />
      }
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <div className="bg-gray-700"></div>
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}