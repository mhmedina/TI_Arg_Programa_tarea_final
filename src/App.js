import './App.css';
import arg_programa from  './imagenes/FONDO_JPG-arg_programa.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='arg_programa-contenedor'>
        <img 
          src={arg_programa} 
          className='arg_programa-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
