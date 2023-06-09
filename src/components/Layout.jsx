import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <section className="flex">
      <aside className="bg-blue-700 md:w-1/4  md:h-min-screen flex flex-col justify-start items-center pt-6 shadow-shadowcustom ">
        <h1 className="text-white text-4xl  capitalize font-black font-mono">
          CRM-clientes
        </h1>

        <nav className="w-full ">
          <ul className="w-full flex flex-col text-white justify-center items-center gap-2 mt-10">
            <li
              className={`block  ${
                location.pathname == "/"
                  ? "bg-green-500 text-white"
                  : "bg-gray-50  text-black"
              }  rounded-md  shadow-lg py-1 px-4 hover:bg-slate-200 duration-150 w-2/5 text-center `}
            >
              {" "}
              <Link to={"/"}>Clientes</Link>
            </li>
            <li
              className={`block  ${
                location.pathname == "/clientes/nuevo"
                  ? "bg-green-500 text-white"
                  : "bg-gray-50  text-black"
              }  rounded-md  shadow-lg py-1 px-4 hover:bg-slate-200 duration-150 w-2/5 text-center`}
            >
              {" "}
              <Link to={"/clientes/nuevo"}>Nuevo cliente</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="md:w-3/4 md:h-screen overflow-y-scroll ">
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
