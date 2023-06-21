
import '../estilos/Boton.css'

function BtnClear(props){
    return (
        <button 
            className='btn-clear'
            onClick={()=>props.limpiarPantalla('')}>
                {props.children}
        </button>
    );
}
export default BtnClear;