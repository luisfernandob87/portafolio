import React from "react";
import foto from "../img/foto.png";
import moon from "../img/moon.svg";
import lang from "../img/lang.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";

const Home = () => {
  return (
    <section className="home">
      <div id="home">
        <img src={moon} alt="dark_theme" />
        <br />
        <img src={lang} alt="lenguaje" />
      </div>
      <div className="info">
        <img src={foto} alt="foto" />
        <h1>
          Hola, soy <span>L</span>
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
        </h1>
        <h3>Desarrollador Web Front End</h3>
      </div>
      <div className="enlacesHome">
        <img src={linkedin} alt="logo_linkedin" />
        <img src={mail} alt="logo_mail" />
      </div>
    </section>
  );
};

export default Home;
