import React from "react";
import checklist from '../img/checklist.svg'
import laptop from '../img/laptop.svg'
import desktop from '../img/desktop.svg'

const Experiencia = () => {
  return (
    <section id="experiencia" >
      <div className="containerExperiencia">
        <div >
          <img src={checklist} alt="icono_cheklist" />
          <h5>2019 - 2022</h5>
          <p>Analista de Software</p>
          <ul>
            <li>Capacitación a especialistas y usuarios sobre uso de herramienta. </li>
            <li>Configuración de nuevos servicios, usuarios, unidades de negocio y compañías.</li>
            <li>Soporte a infraestructura y conectividad de herramienta.</li>
          </ul>
        </div>
        <div>
          <img src={laptop} alt="icono_laptop" />
          <h5>2009 - 2018</h5>
          <p>Ingeniero de Soporte</p>
          <ul>
            <li>Mantenimiento preventivo y correctivo. </li>
            <li>Soporte a usuarios, infraestructura y conectividad.</li>
          </ul>
        </div>
        <div >
          <img src={desktop} alt="icono_desktop" />
          <h5>2006 - 2009</h5>
          <p>Técnico de Soporte</p>
          <ul>
            <li>Mantenimiento preventivo y correctivo. </li>
            <li>Soporte a usuarios, infraestructura y conectividad.</li>
          </ul>
        </div>
        </div>
    </section>
  );
};

export default Experiencia;
