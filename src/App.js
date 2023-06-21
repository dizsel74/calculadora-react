import React from 'react';
import './App.css';
import './componentes/Boton'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BtnClear from './componentes/BtnClear';

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [num, setInput] = useState('');

  
  function capturarNumero(val) {
    console.log ('val = '+val);
if (isNaN(val) && num.at(-1) === val){ /*verifica que no se pueda ingresar dos operadores o puntos seguidos*/
  setInput(num);
}else{
  setInput(num + val);
}

  }
 
  function borrarPantalla() {
    return setInput('');
  }
  function calcularResultado(){
    if (num){
      setInput(evaluate(num));
    }else{
      setInput('');
    }
    // tambien se puede hacer con flecha
    // const calcularResultado = () => {
    //   setInput(evaluate(num))
    // };
  };

  return (
    <div className='App'>
      <h1>Calculadora con React</h1>
      <div className='contenedor-calculadora'>
        <div className='fila pantalla-visel' >
          <Pantalla input={num}/>
        </div>
        <div className='fila'>
          <div className='filas'>
            <Boton addNum={capturarNumero}>7</Boton>
            <Boton addNum={capturarNumero}>8</Boton>
            <Boton addNum={capturarNumero}>9</Boton>
            <BtnClear limpiarPantalla={borrarPantalla}>
              C
            </BtnClear>
          </div>
        </div>

        <div className='fila'>
          <div className='filas'>
          <Boton addNum={capturarNumero}>4</Boton>
          <Boton addNum={capturarNumero}>5</Boton>
          <Boton addNum={capturarNumero}>6</Boton>
          <Boton addNum={capturarNumero}>+</Boton>
          </div>
        </div>

        <div className='fila'>
          <div className='filas'>
            <Boton addNum={capturarNumero}>1</Boton>
            <Boton addNum={capturarNumero}>2</Boton>
            <Boton addNum={capturarNumero}>3</Boton>
            <Boton addNum={capturarNumero}>-</Boton>
          </div>
        </div>

        <div className='fila'>
          <div className='filas'>
            
            <Boton addNum={capturarNumero}>/</Boton>
            <Boton addNum={capturarNumero}>0</Boton>
            <Boton addNum={capturarNumero}>.</Boton>
            <Boton addNum={capturarNumero}>*</Boton>
          </div>
        </div>
        <div className='fila'>
          <div className='filas'>
          <Boton addNum={calcularResultado}>=</Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=2425s