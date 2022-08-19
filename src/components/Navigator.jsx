import React from "react";
import logo from "../img/logo.svg";
import menu from "../img/menu.svg";

const Navigator = () => {
  const menuMobile = () => {
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    nav.classList.toggle("hidden");
    menu.classList.toggle("rotate");
  };

  return (
    <header className="containerNav modoClaro">
      <a href="#home">
        <img className="logo" src={logo} alt="Logo_imagen" />
      </a>
      <div className="containerMenu">
        <img
          id="menu"
          src={menu}
          alt="menu"
          className="menu"
          onClick={menuMobile}
        />

        <nav id="nav">
          <a href="#home">Home</a>
          <a href="#acercaDeMi">Acerca de mí</a>
          <a href="#habilidades">Mis Habilidades</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navigator;
