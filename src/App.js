import React from 'react';
import './App.css';
import './componentes/Boton'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';

function App() {
  return (
    <div className='App'>
      <h1>Calculadora con React</h1>
      <div className='contenedor-calculadora'>
        <div className='fila pantalla-visel' >
          <Pantalla></Pantalla>
        </div>
        <div className='fila'>
          <div className='filas'>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>/</Boton>
          </div>
        </div>

        <div className='fila'>
          <div className='filas'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>x</Boton>
          </div>
        </div>

        <div className='fila'>
          <div className='filas'>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>-</Boton>
          </div>
        </div>

        <div className='fila'>
          <div className='filas'>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>=</Boton>
            <Boton>+</Boton>
          </div>
        </div>
        <div className='fila'>
          <div className='filas'>
            <Boton >Borrar</Boton>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=2425s