import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./context/infoContext";
import "./index.css";
import GitHub from "./pages/GitHub";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GitHub />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
