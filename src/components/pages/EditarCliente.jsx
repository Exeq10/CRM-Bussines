
import {  useLoaderData ,Form , useNavigate } from "react-router-dom"
import { getClient } from "../../data/Acciones"
import ErrorPage from "../ErrorPage"
import Formulario from "../Formulario"




/* es como un use effect ----------------------------------------------------------------------- */
export async function  loader ({params}) {

 
 const cliente = await getClient(params.id)
 
  if (Object.values(cliente).length === 0) {

 throw new Response ('',{

  status: 404,
  statusText : 'No se encontró el resultado'
 })
    
  }

 
  return cliente

}




/* dentro del componente ------------------------------------------------------------------------- */

function EditarCliente() {

  const navigate = useNavigate()

  
  const cliente = useLoaderData()

  console.log(cliente);
  



  return (
    <div>

<div className="ml-4 mt-3">
        <h2 className="font-black text-2xl text-blue-600 ">Clientes</h2>

        <p className="text-xs">Editar Cliente</p>
      </div>

      <div className="flex justify-end">
        {" "}
        <button
          className="bg-blue-600 text-white py-1 px-3 mr-3 rounded-md "
          onClick={() => {
            navigate("/");
          }}
        >
          Volver
        </button>{" "}
      </div>

      {/* formulario  */}
      <div className="w-3/4 bg-white mx-auto shadow-lg py-5 px-6">
       {/*  {errores?.length &&
          errores.map((err, i) => <Error key={i}>{err} </Error>)} */}
        <Form method="POST"
        >
          <Formulario  cliente={cliente} />

          <input
            type="submit"
            value={"Agregar cliente"}
            className="py-1 px-3 rounded-md text-white bg-green-500 hover:bg-green-700 cursor-pointer transition-all duration-150 shadow-md"
          />
        </Form>
      </div>

    </div>
  )
}

export default EditarCliente