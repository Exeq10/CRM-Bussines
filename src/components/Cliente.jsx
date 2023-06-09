
import { useNavigate } from "react-router-dom"

function Cliente({client}) {

const navigate = useNavigate()

  return (
    

    <tr   className="py-6 px-2 border hover:bg-gray-100 cursor-pointer shadow-inner ">
    <td className="text-black">{client.nombre} </td>
    <td className="text-black">{client.email} </td>
    <td className="text-black">{client.telefono} </td>
    <td className="text-black">{client.empresa} </td>
    <td className="text-black">  <button className="py-1 px-3 text-white bg-orange-500  hover:bg-orange-800  rounded-md" onClick={()=> navigate(`/clientes/editar/${client.id}`)} >Editar</button> <button  className="py-1 px-3 text-white bg-red-600 rounded-md hover:bg-red-800 ">Eliminar</button> </td>
    
    </tr>
  )
}

export default Cliente