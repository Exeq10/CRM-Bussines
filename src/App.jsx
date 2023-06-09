import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";

import { Children } from "react";
import NuevoCliente , {action as actionnewclient} from "./components/pages/NuevoCliente";
import EditarCliente, {loader as updateLoader} from "./components/pages/EditarCliente";
import EliminarCliente from "./components/pages/EliminarCliente";

import Clientes ,{loader as clientLoader} from "./components/pages/Clientes";
import ErrorPage from "./components/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index:true,
        element :<Clientes />,

        loader:clientLoader,
        errorElement:<ErrorPage/>
      },


      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,

        action:actionnewclient,
        errorElement:<ErrorPage/>

       
      },
      {
        path: "/clientes/editar/:id",
        element: <EditarCliente />,
        errorElement:<ErrorPage/>,
        loader : updateLoader,
        

      },
      {
        path: "/clientes/eliminar",
        element: <EliminarCliente />,
        errorElement:<ErrorPage/>
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
