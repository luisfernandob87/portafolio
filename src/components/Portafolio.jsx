import React from "react";
import tienda from "../img/tienda.png";
import pokeapi from "../img/pokeapi.png";
import rick from "../img/rick.png";
import academloStore from "../img/academloStore.png";
import bienesRaices from "../img/bienesRaices.png";
import html from "../img/html.svg";
import css from "../img/css.svg";
import react from "../img/react.svg";
import redux from "../img/redux.svg";
import javascript from "../img/javascript.svg";
import git from "../img/github.svg";
import web from "../img/internet.png";

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h4>Portafolio</h4>
      <div>
        <div className="containerPortafolio">
          <h5>
            <span>Poke API:</span>
          </h5>
          <p>Tecnologías Utilizadas</p>
          <div className="logos">
            <img className="logo" src={html} alt="logo" />
            <img className="logo" src={css} alt="logo" />
            <img className="logo" src={react} alt="logo" />
            <img className="logo" src={redux} alt="logo" />
          </div>
          <img src={pokeapi} alt="imagen_portafolio" />
          <div className="accesos">
            <a
              href="https://github.com/luisfernandob87/poke-api-react"
              target="_blank"
            >
              <img src={git} alt="Logo_git" className="logo" />
              Repositorio
            </a>
            <a href="https://poke-api-react-demo.netlify.app/" target="_blank">
              <img src={web} alt="Logo_web" className="logo" />
              Página
            </a>
          </div>
        </div>
        <div className="containerPortafolio">
          <h5>
            <span>Rick and Morty API:</span>
          </h5>
          <p>Tecnologías Utilizadas</p>
          <div className="logos">
            <img className="logo" src={html} alt="logo" />
            <img className="logo" src={css} alt="logo" />
            <img className="logo" src={react} alt="logo" />
          </div>
          <img src={rick} alt="imagen_portafolio" />
          <div className="accesos">
            <a
              href="https://github.com/luisfernandob87/Rick-and-Morty-Wiki"
              target="_blank"
            >
              <img src={git} alt="Logo_git" className="logo" />
              Repositorio
            </a>
            <a
              href="https://react-rick-and-morty-wiki.netlify.app/"
              target="_blank"
            >
              <img src={web} alt="Logo_web" className="logo" />
              Página
            </a>
          </div>
        </div>
        <div className="containerPortafolio">
          <h5>
            <span>Tienda Academlo:</span>
          </h5>
          <p>Tecnologías Utilizadas</p>
          <div className="logos">
            <img className="logo" src={html} alt="logo" />
            <img className="logo" src={css} alt="logo" />
            <img className="logo" src={javascript} alt="logo" />
          </div>
          <img src={academloStore} alt="imagen_portafolio" />
          <div className="accesos">
            <a
              href="https://github.com/luisfernandob87/e-commerce"
              target="_blank"
            >
              <img src={git} alt="Logo_git" className="logo" />
              Repositorio
            </a>
            <a href="https://academlo-shop-demo.netlify.app/" target="_blank">
              <img src={web} alt="Logo_web" className="logo" />
              Página
            </a>
          </div>
        </div>
        <div className="containerPortafolio">
          <h5>
            <span>Bienes Raices:</span>
          </h5>
          <p>Tecnologías Utilizadas</p>
          <div className="logos">
            <img className="logo" src={html} alt="logo" />
            <img className="logo" src={css} alt="logo" />
            <img className="logo" src={javascript} alt="logo" />
          </div>
          <img src={bienesRaices} alt="imagen_portafolio" />
          <div className="accesos">
            <a
              href="https://github.com/luisfernandob87/bienes_raices"
              target="_blank"
            >
              <img src={git} alt="Logo_git" className="logo" />
              Repositorio
            </a>
            <a
              href="https://bienes-raices-morales.netlify.app/"
              target="_blank"
            >
              <img src={web} alt="Logo_web" className="logo" />
              Página
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
<h4>Portafolio</h4>;
