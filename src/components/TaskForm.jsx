import { useDispatch } from "react-redux";
import { ADD_TASK } from '../redux/actions';

export default function TaskForm() {
  // 2. Obtenemos la función 'dispatch' de Redux
  const dispatch = useDispatch();

  function handleSubmit(e) {
    // Evita que el navegador recargue la página
    e.preventDefault(); 
    
    const titulo = e.target.titulo.value;

    // Validación simple para no agregar tareas vacías
    if (!titulo.trim()) {
      return; 
    }

    // Creamos el objeto 'acción' 
    dispatch({
      type: ADD_TASK, // El tipo de acción
      payload: {      // Los datos que necesita el reducer
        id: Date.now(), // Un id simple usando la fecha
        titulo: titulo,
        completada: false 
      }
    });

    e.target.reset(); // Limpia el <input>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
}