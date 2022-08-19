import React from "react";
import "./App.css";
import AcercaDeMi from "./components/AcercaDeMi";
import Contacto from "./components/Contacto";
import Experiencia from "./components/Experiencia";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
import Portafolio from "./components/Portafolio";

function App() {
  return (
    <>
      <Navigator />
      <Home />
      <AcercaDeMi />
      <Habilidades />
      <Experiencia />
      <Portafolio />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
