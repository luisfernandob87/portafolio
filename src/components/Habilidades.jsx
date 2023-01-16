import React from "react";
import html from "../img/html.svg";
import css from "../img/css.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
import figma from "../img/figma.svg";
import node from "../img/nodejs.svg";

const Habilidades = () => {
  return (
    <section id="habilidades">
      <h4>Mis Habilidades</h4>
      <div className="imgHabilidades">
        <div className="img">
          <img src={html} alt="logo_html" />
          <h5>HTML</h5>
        </div>
        <div className="img">
          <img src={css} alt="logo_css" />
          <h5>CSS</h5>
        </div>
        <div className="img">
          <img src={javascript} alt="logo_javascript" />
          <h5>JavaScript</h5>
        </div>
        <div className="img">
          <img src={react} alt="logo_react" />
          <h5>React JS</h5>
        </div>
        <div className="img">
          <img src={figma} alt="logo_figma" />
          <h5>Figma</h5>
        </div>
        <div className="img">
          <img src={node} alt="logo_node" />
          <h5>Node JS</h5>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
