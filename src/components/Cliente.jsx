import { redirect, useNavigate, Form } from "react-router-dom";

import { deleteClient } from "../data/Acciones";

function Cliente({ client }) {
  /* eliminar cliente */
  const handleDelete = (id) => {
    deleteClient(id);

    redirect("/");
  };

  const navigate = useNavigate();

  return (
    <tr className="py-6 px-2 border hover:bg-gray-100 cursor-pointer shadow-inner ">
      <td className="text-black">{client.nombre} </td>
      <td className="text-black">{client.email} </td>
      <td className="text-black">{client.telefono} </td>
      <td className="text-black">{client.empresa} </td>
      <td className="text-black flex gap-1 justify-center items-center">
        {" "}
        <button
          className="py-1 px-3 text-white bg-orange-500  hover:bg-orange-800  rounded-md"
          onClick={() => navigate(`/clientes/editar/${client.id}`)}
        >
          Editar
        </button>
        <Form
          onSubmit={() => {
            if (confirm("Estas seguro de eliminar")) {
              handleDelete(client.id);
            }
          }}
        >
          <button className="py-1 px-3 text-white bg-red-600 rounded-md hover:bg-red-800 ">
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Cliente;
