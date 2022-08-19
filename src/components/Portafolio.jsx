import React from "react";
import tienda from '../img/tienda.png'
import pokeapi from '../img/pokeapi.png'
import rick from '../img/rick.png'
import academloStore from '../img/academloStore.png'
import bienesRaices from '../img/bienesRaices.png'

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h4>Portafolio</h4>
      <div>
      <img src={tienda} alt="imagen_portafolio"/>
      <img src={pokeapi} alt="imagen_portafolio"/>
      <img src={rick} alt="imagen_portafolio" />
      <img src={academloStore} alt="imagen_portafolio" />
      <img src={bienesRaices} alt="imagen_portafolio" />
      </div>
    </section>
  );
};

export default Portafolio;
<h4>Portafolio</h4>;
