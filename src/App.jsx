import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import FetchRQ from "./pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        <div className="bg-gray-700">
          <h1></h1>
        </div>
      </RouterProvider>
    </QueryClientProvider>
  );
}