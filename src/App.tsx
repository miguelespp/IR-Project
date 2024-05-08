import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
