import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";

import { Children } from "react";

/* importacion del componente Nuevo cliente */
import NuevoCliente, {
  action as actionnewclient,
} from "./components/pages/NuevoCliente";

/* importacion del componente Nuevo cliente */
import EditarCliente, {
  loader as updateLoader,
  action as actionEditClient,
} from "./components/pages/EditarCliente";

import Clientes, { loader as clientLoader } from "./components/pages/Clientes";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Clientes />,

        loader: clientLoader,
        errorElement: <ErrorPage />,
      },

      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,

        action: actionnewclient,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/editar/:id",
        element: <EditarCliente />,
        errorElement: <ErrorPage />,
        loader: updateLoader,
        action: actionEditClient,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
