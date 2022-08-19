import React from "react";
import programando from "../img/programando.svg";

const AcercaDeMi = () => {
  return (
    <section className="acercaDeMi modoClaro" id="acercaDeMi">
      <h4>Acerca de mí</h4>
      <div className="containerAcercaDeMi">
        <p>
          Profesional informático con más de 15 años de experiencia en
          diferentes posiciones enfocadas a la tecnología. Me apasiona el
          desarrollo por el hecho de poder crear productos o servicios
          tecnológicos basados en una idea.
        </p>
        <img src={programando} alt="Imagen_programando" />
      </div>
    </section>
  );
};

export default AcercaDeMi;
