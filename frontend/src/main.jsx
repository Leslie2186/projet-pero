import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cities from "./pages/cities/Cities";
import OneCity from "./components/onecity/OneCity";

import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cities />,
        loader: () => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/cities`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/cities/:id",
        element: <OneCity />,
        loader: ({ params }) => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/cities/${params.id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
