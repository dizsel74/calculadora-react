import React from 'react';
import './App.css';
import './componentes/Boton'
import Boton from './componentes/Boton';


function App() {
  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'><Boton num='3'></Boton></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=2425s