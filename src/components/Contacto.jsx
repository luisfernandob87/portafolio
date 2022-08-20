import React from "react";
import linkedin from "../img/linkedinDark.svg";
import mail from "../img/gmailDark.svg";
import descarga from "../img/descargaDark.png";
import curriculum from "../img/curriculum.pdf";

const Contacto = () => {
  return (
    <section className="modoClaro" id="contacto">
      <h4>Contacto</h4>
      <div>
        <a
          href="https://www.linkedin.com/in/luis-morales-barillas/"
          target="_blank"
        >
          <img src={linkedin} alt="logo_linkedin" />
        </a>
        <a href="mailto:luisfernandob87@gmail.com">
          {" "}
          <img src={mail} alt="logo_mail" />
        </a>
        <a href={curriculum} target="_blank">
          <img
            src={descarga}
            alt="logo_pdf"
            style={{ height: "80px", width: "80px" }}
          />
        </a>
      </div>
    </section>
  );
};

export default Contacto;
