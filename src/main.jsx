import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ApiTests from "./components/ApiTests"
import Shopping from "./components/Shopping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shopping",
    element: <Shopping />,
  },
  {
    path: "test",
    element: <ApiTests />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);