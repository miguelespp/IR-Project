import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import SignInSide from "./SignInSide.tsx";
import Reservas from "./Dashboard/Reservas.tsx";
import Historial from "./Dashboard/Historial.tsx";
import Contacto from "./Dashboard/Contacto.tsx";
import Perfil from "./Dashboard/Perfil.tsx";

const Home = () => {
  return (
    <h1>
      <Link to="/login">Ir a Login</Link>
    </h1>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignInSide />,
  },
  {
    path: "/reservas",
    element: <Reservas />,
  },
  {
    path: "/historial",
    element: <Historial />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

{
  /* Router para paginas normales
<BrowserRouter basename="/IR-Project/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route />
      </Routes>
    </BrowserRouter> */
}
