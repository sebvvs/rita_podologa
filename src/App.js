import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import SobreMi from './componentes/SobreMi';
import Tienda from './componentes/Tienda';
import MisEspecialidades from './componentes/MisEspecialidades';
import Contacto from './componentes/Contacto';
import Carrito from './componentes/Carrito';
import FormularioCompra from './componentes/FormCompra';
import GestionDatos from './componentes/GestionDatos';
import Footer from './componentes/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <Home />
        <SobreMi />
        <Tienda />
        <MisEspecialidades />
        <Contacto />
        <Carrito />
        <FormularioCompra />
        <GestionDatos />
        <Footer />
      </div>
  );
}

export default App;
