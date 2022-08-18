import React from "react";
import logo from "../img/logo.svg";

const Navigator = () => {
  return (
    <header className="containerNav modoClaro">
      <div>
        <a href="#">
          <img className="logo" src={logo} alt="Logo_imagen" />
        </a>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Acerca de mí</a>
        <a href="#">Mis Habilidades</a>
        <a href="#">Experiencia</a>
        <a href="#">Portafolio</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
};

export default Navigator;
