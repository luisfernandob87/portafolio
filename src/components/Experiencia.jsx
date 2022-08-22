import React from "react";

const Experiencia = () => {
  return (
    <section className="modoClaro" id="experiencia">
      <h4>Experiencia</h4>
      <div className="containerExperiencia">
      <table>
        <thead>
        <tr>
          <td>Periodo</td>
          <td>Puesto</td>
          <td>Empresa</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2019 - 2022</td>
          <td>Analista de Software</td>
          <td>iungo.co</td>
        </tr>
        <tr>
          <td>2009 - 2018</td>
          <td>Ingeniero de Soporte</td>
          <td>iungo.co</td>
        </tr>
        <tr>
          <td>2006 - 2009</td>
          <td>Técnico de Soporte</td>
          <td>Inmobiliaria ARGOS, S.A.</td>
        </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default Experiencia;
