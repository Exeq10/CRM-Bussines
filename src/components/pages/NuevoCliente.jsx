import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../Formulario";

import Error from "../Error";
import { postClient } from "../../data/Acciones";

/* control del formulario  */

/* función asíncrona ya que puede tardar  */
export async function action({ request }) {
  const formData = await request.formData();

  /* tomo los datos del formulario */
  const datos = Object.fromEntries(formData);

  /* errores  */

  const errores = [];

  /* validar email  */

  const email = formData.get("email");

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("Email no válido");
  }

  /* validación de campos vacíos  */

  if (Object.values(datos).includes("")) {
    errores.push("Todos los datos son obligatorios");
  }

  /* validación de errores  */

  if (Object.keys(errores).length) {
    return errores;
  }

  await postClient(datos);

  return redirect("/");
}

function NuevoCliente() {
  const navigate = useNavigate();

  /* tomo los datos de la función action */
  const errores = useActionData();

  return (
    <>
      <div className="ml-4 mt-3">
        <h2 className="font-black text-2xl text-blue-600 ">Clientes</h2>

        <p className="text-xs">Ingresa nuevos Clientes</p>
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
        {errores?.length &&
          errores.map((err, i) => <Error key={i}>{err} </Error>)}
        <Form method="POST">
          <Formulario />

          <input
            type="submit"
            value={"Agregar cliente"}
            className="py-1 px-3 rounded-md text-white bg-green-500 hover:bg-green-700 cursor-pointer transition-all duration-150 shadow-md"
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
