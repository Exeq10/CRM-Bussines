
import { useLoaderData } from "react-router-dom";
import Cliente from "../Cliente";
import { getClients } from "../../data/Acciones";


/* es como un use effect  */
export  function  loader () {

  return getClients()

}




function Clientes() {

/* aqui tomo los datos del loader  */
  const datos = useLoaderData()





  return (
    <div className='ml-4 mt-3'>

<h2 className='font-black text-2xl text-blue-600 '>Clientes</h2>

<p className='text-xs'>Controla tus Clientes</p>


{
  datos.length ? (<table className="w-full bg-white shadow-sm mt-5  table-auto">

  <thead className="bg-blue-600 text-white">
  
  <tr>
    <th className="p-2">Cliente</th>
    <th className="p-2">Email</th>
    <th className="p-2">Teléfono</th>
    <th className="p-2">Empresa</th>
    <th className="p-2">Acciones</th>
  </tr>

  </thead>
  
 <tbody className="text-center ">

   {datos.map((client,key)=>(
    

   <Cliente client={client} key={key} />
    
      ))}
 </tbody>
  
  
  
  
  
  
  
  </table> ): (

    <p>No hay clientes aún</p>
  )
}



    </div>
  )
}

export default Clientes