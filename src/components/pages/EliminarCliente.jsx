import { useLoaderData } from "react-router-dom";
import { getClient } from "../../data/Acciones"




/* es como un use effect ----------------------------------------------------------------------- */
export async function loader({ params }) {
  const cliente = await getClient(params.id);

  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No se encontró el resultado",
    });
  }

  return cliente;
}





function EliminarCliente() {



  const cliente = useLoaderData()



  return (
    <div>EliminarCliente</div>
  )
}

export default EliminarCliente