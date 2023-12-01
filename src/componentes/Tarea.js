import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
          <FaCheckDouble className='tarea-icono' />
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineDelete className='tarea-icono' />
      </div>
    </div>
  );    
}

export default Tarea;