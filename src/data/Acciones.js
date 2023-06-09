/* traer todos los clientes ----------------------------------------------------------------------------------------------------------------- */
export const getClients = async () => {
  const res = await fetch(" http://localhost:3000/clientes");

  const data = await res.json();

  return data;
};

/* Ingresar Cliente --------------------------------------------------------------------------------------------------------------------------- */

export const postClient = async (datos) => {
  console.log("desde postclient ", datos);

  try {
    const res = await fetch(" http://localhost:3000/clientes", {
      /* método http para enviar datos al servidor */
      method: "POST",
      /* datos a enviar al servidor tomamos un objeto y lo convertimos en json */
      body: JSON.stringify(datos),

      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  } catch (error) {
    console.log(error);
  }
};



/* editar clientes -------------------------------------------------------------------------------------------------------------------------- */


export const getClient = async (id)=> {


  const res = await fetch(`http://localhost:3000/clientes/${id} `);

  const data = await res.json();

  return data;



        
}


