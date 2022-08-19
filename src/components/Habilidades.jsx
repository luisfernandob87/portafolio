import React from "react";
import html from "../img/html.svg";
import css from "../img/css.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
import figma from "../img/figma.svg";

const Habilidades = () => {
  return (
    <section id="habilidades">
      <h4>Mis Habilidades</h4>
      <img src={html} alt="logo_html" />
      <img src={css} alt="logo_css" />
      <img src={javascript} alt="logo_javascript" />
      <img src={react} alt="logo_react" />
      <img src={figma} alt="logo_figma" />
    </section>
  );
};

export default Habilidades;
