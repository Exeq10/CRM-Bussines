
import { useRouteError } from "react-router-dom"


function ErrorPage() {

const error = useRouteError()

  return (
    <div className=" text-center m-auto space-y-8 mt-10">

    <h1 className="font-black text-blue-600 text-2xl ">CRM - ERROR</h1>

    <p>Sentimos lo sucedido lo solucionaremos a la brevedad </p>

<p>Error tipo </p>
    <p className="font-bold">{error.statusText ||   error.message} </p>


    </div>
  )
}

export default ErrorPage