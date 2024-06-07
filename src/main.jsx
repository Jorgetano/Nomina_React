import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./componentes/Home";
import CalculadoraLiquidacion from "./componentes/CalculadoraLiquidacion"
import { RouterProvider, createBrowserRouter,  } from "react-router-dom";
import PanelInicio from "./componentes/PanelInicio";
import RegistroUsuarios from "./componentes/RegistroUsuarios";

let router = createBrowserRouter([
  {
    path: "/Login",
    element: <PanelInicio />
  },
  {
    path: "/",
    element: <Home />
  },
 
  {
    path: "/Registro",
    element: <RegistroUsuarios />
  },
  {
    path: "/HomeCalculadora",
    element: <CalculadoraLiquidacion/>
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
