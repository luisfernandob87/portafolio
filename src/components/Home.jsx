import React from "react";
import foto from "../img/avatar_con_ojos.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";
import pdf from "../img/pdf.png";
import curriculum from "../img/curriculum.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
       <div className="info">
        <img src={foto} alt="foto" id="fotoPerfil" />
        <h1>
          Hola, soy{" "}
          <div className="name">
            <span>L</span>
            <span>u</span>
            <span>i</span>
            <span>s</span>
            <p style={{ display: "inline" }}> </p>
            <span>M</span>
            <span>o</span>
            <span>r</span>
            <span>a</span>
            <span>l</span>
            <span>e</span>
            <span>s</span>
          </div>
        </h1>
        <h2>Desarrollador Web Front End</h2>
      </div>
      <div className="enlacesHome">
        <a
          href="https://www.linkedin.com/in/luis-morales-barillas/"
          target="_blank"
        >
          <img src={linkedin} alt="logo_linkedin" />
        </a>
        <a href="mailto:luisfernandob87@gmail.com">
          <img src={mail} alt="logo_mail" />
        </a>
        <a href={curriculum} target="_blank">
          <img src={pdf} alt="logo_pdf" style={{ height: "95.99px" }} />
        </a>
      </div>
    </section>
  );
};

export default Home;
