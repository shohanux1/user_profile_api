import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./context/infoContext";
import "./index.css";
import Generator from "./pages/Generator";
import GitHub from "./pages/GitHub";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GitHub />,
  },
  {
    path: "/generator",
    element: <Generator />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
