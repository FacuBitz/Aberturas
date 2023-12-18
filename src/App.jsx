import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Empresa from "./components/Empresa";
import Root from "./components/Root";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "empresa",
        element: <Empresa />,
      },
      {
        path: "catalogue",
        element: <ItemListContainer />,
      },
      {
        path: "category/:category",
        element: <ItemListContainer />,
      },
      {
        path: "item/:id",
        element: <ItemDetailContainer />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
