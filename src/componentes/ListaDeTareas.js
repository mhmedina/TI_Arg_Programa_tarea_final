import React, { useState, useEffect } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';
import Swal from 'sweetalert2';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const [cantidadTareas, setCantidadTareas] = useState(0);

  useEffect(() => {
    setCantidadTareas(tareas.length);
  }, [tareas]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
    Swal.fire('¡Tarea eliminada!', '', 'success'); 
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    Swal.fire('¡Tarea completada con Éxito!', '', 'success'); 
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          )
        }
      </div>
      <p className='cantidad-tareas'>Cantidad de Tareas: {cantidadTareas}</p>
    </>
  );
  
      }
export default ListaDeTareas;
