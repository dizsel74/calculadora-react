import React from "react"
import '../estilos/Pantalla.css'

function Pantalla(props){
    return(
        <div className='input'>
            {props.input}
        </div>
    );
}

export default Pantalla;