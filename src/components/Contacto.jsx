import React from "react";
import linkedin from '../img/linkedinDark.svg'
import mail from '../img/gmailDark.svg'

const Contacto = () => {
  return (
    <section className="modoClaro" id="contacto">
      <h4>Contacto</h4>
      <div>
      <a href="https://www.linkedin.com/in/luis-morales-barillas/" target="_blank"><img src={linkedin} alt="logo_linkedin" /></a>
      <a href="mailto:luisfernandob87@gmail.com"> <img src={mail} alt="logo_mail" /></a>
      </div>
    </section>
  );
};

export default Contacto;
