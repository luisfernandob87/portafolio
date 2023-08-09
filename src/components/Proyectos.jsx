import React, { useState, useCallback } from "react";
import familyOffice from "../img/familyOffice.png";
import llamadaAtencion from "../img/llamadaAtencionApp.png";
import imagenes from "../img/imagenes.png";
import react from "../img/react.svg";
import node from "../img/nodejs.svg";
import mui from "../img/mui.svg";
import inicio from "../img/llamadaAtencion/inicio.png";
import menu from "../img/llamadaAtencion/menu.png";
import registroFirmas from "../img/llamadaAtencion/registroFirmas.png";
import registroDias from "../img/llamadaAtencion/registroDias.png";
import registroHoras from "../img/llamadaAtencion/registroHoras.png";
import inicioWeb from "../img/llamadaAtencion/webInicio.png";
import menuWeb from "../img/llamadaAtencion/webMenu.png";
import empleadosWeb from "../img/llamadaAtencion/webEmpleados.png";
import IngresoAdmin from "../img/llamadaAtencion/webIngresoAdministrativo.png";
import ingresoTarde from "../img/llamadaAtencion/webEntradaTarde.png";
import llamadas from "../img/llamadaAtencion/webConsultaLlamadas.png";
import detalle from "../img/llamadaAtencion/webDetalle.png";
import inicioFamilyOffice from "../img/familyOffice/inicio.png";
import menuFamilyOffice from "../img/familyOffice/menu.png";
import casosFamilyOffice from "../img/familyOffice/casosReportados.png";
import servicioFamilyOffice from "../img/familyOffice/servicioDesplegable.png";
import fechaFamilyOffice from "../img/familyOffice/ingresoFecha.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Proyectos = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <section id="portafolio">
      <h4>Portafolio</h4>
      <h6>Proyectos</h6>
      <div className="containerProyectos">
        <div className="containerPortafolio">
          <h5>
            <span>Plataforma de llamadas de atención:</span>
          </h5>
          <p>Tecnologías Utilizadas</p>
          <div className="logos">
            <img className="logo" src={react} alt="logo" />
            <img className="logo" src={mui} alt="logo" />
            <img className="logo" src={node} alt="logo" />
          </div>
          <img
            src={llamadaAtencion}
            alt="imagen_portafolio"
            className="previewProyectos"
          />
          <div className="accesos">
            <a onClick={() => setOpen(true)}>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                  { src: inicio },
                  { src: menu },
                  { src: registroFirmas },
                  { src: registroDias },
                  { src: registroHoras },
                  { src: inicioWeb },
                  { src: menuWeb },
                  { src: empleadosWeb },
                  { src: IngresoAdmin },
                  { src: ingresoTarde },
                  { src: llamadas },
                  { src: detalle },
                ]}
              />
              <img src={imagenes} alt="Logo_web" className="logo" />
              Imágenes
            </a>
          </div>
        </div>
        <div className="containerPortafolio">
          <h5>
            <span>Family Office:</span>
          </h5>
          <p>Tecnologías Utilizadas</p>
          <div className="logos">
            <img className="logo" src={react} alt="logo" />
          </div>
          <img
            src={familyOffice}
            alt="imagen_portafolio"
            className="previewProyectos"
          />
          <div className="accesos">
            <a onClick={() => setOpen2(true)}>
              <Lightbox
                open={open2}
                close={() => setOpen2(false)}
                slides={[
                  { src: inicioFamilyOffice },
                  { src: casosFamilyOffice },
                  { src: menuFamilyOffice },
                  { src: servicioFamilyOffice },
                  { src: fechaFamilyOffice },
                ]}
              />
              <img src={imagenes} alt="Logo_web" className="logo" />
              Imágenes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
