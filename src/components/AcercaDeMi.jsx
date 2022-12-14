import React from "react";
import programando from "../img/programando.svg";

const AcercaDeMi = () => {
  return (
    <section className="modoClaro" id="acercaDeMi">
      <h3>Acerca de mí</h3>
      <div className="containerAcercaDeMi">
        <p>
          Profesional informático con más de 15 años de experiencia en
          diferentes posiciones enfocadas a la tecnología. Me apasiona el
          desarrollo y crear productos o servicios tecnológicos basados en una
          idea.
        </p>
        <img src={programando} alt="Imagen_programando" />
      </div>
    </section>
  );
};

export default AcercaDeMi;
