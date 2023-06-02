import React, { useState } from "react";
import logo from "../img/logo.png";
import menu from "../img/menu.svg";

const Navigator = () => {
  const menuMobile = () => {
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    nav.classList.toggle("hidden");
    menu.classList.toggle("rotate");
  };

  const chgTema = () => {
    const seccionAcercaDeMi = document.querySelector("#acercaDeMi");
    const contacto = document.querySelector("#contacto");
    const luna = document.querySelector("#icon");
    const footer = document.querySelector("#footer");
    const nav = document.querySelector("#containerNav");

    if (
      seccionAcercaDeMi.classList == "modoOscuroSection" &&
      contacto.classList == "modoOscuroSection" &&
      footer.classList == "modoOscuroSection"
    ) {
      seccionAcercaDeMi.classList.replace("modoOscuroSection", "modoClaro");
      contacto.classList.replace("modoOscuroSection", "modoClaro");
      footer.classList.replace("modoOscuroSection", "modoClaro");
    } else {
      seccionAcercaDeMi.classList.replace("modoClaro", "modoOscuroSection");
      contacto.classList.replace("modoClaro", "modoOscuroSection");
      footer.classList.replace("modoClaro", "modoOscuroSection");
    }

    if (document.body.classList == "modoOscuro") {
      document.body.classList.remove("modoOscuro");
      luna.classList.replace("sol", "luna");
      nav.classList.remove("modoOscuro");
    } else {
      document.body.classList.add("modoOscuro");
      luna.classList.replace("luna", "sol");
      nav.classList.add("modoOscuro");
    }
  };

  return (
    <header id="containerNav">
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
          <button onClick={chgTema} className="luna" id="icon"></button>
          <a href="#home">Home</a>
          <a href="#acercaDeMi">Acerca de mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#habilidades">Mis Habilidades</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navigator;
