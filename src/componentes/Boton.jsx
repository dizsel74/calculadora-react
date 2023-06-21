
import React from "react";
import '../estilos/Boton.css'

function Boton(props){

  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.');
  };
   
 return (
  
 <button
    className={
      `select-btn ${esOperador(props.children) ? 'operador' : ''} 
                  ${props.children === '=' ? 'igual' : ''}`.trimEnd()
    } 
    onClick={() =>props.addNum(props.children)}>
    {props.children}
  </button>
 
 );
}

  export default Boton;