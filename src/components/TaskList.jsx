import { useSelector } from 'react-redux';
import TaskItem from './TaskItem'; // Importamos el próximo componente

export default function TaskList() {
  
  // 1. ¡Aquí leemos el estado global!
  // useSelector es el hook para "seleccionar" datos del store.
  // Le decimos que queremos state.tasks (el reducer) .tasks (el array)
  const tasks = useSelector((state) => state.tasks.tasks);

  // Implementación de la Extensión 
  // Creamos una NUEVA copia ordenada del array de tareas.
  // a.completada (booleano) se trata como 0 (false) o 1 (true)
  // Las tareas 'false' (0) irán antes que las 'true' (1).
  const sortedTasks = [...tasks].sort((a, b) => a.completada - b.completada);

  return (
    <div>
      {/* 3. Hacemos un map sobre la lista ordenada */}
      {sortedTasks.length === 0 ? (
        <p>¡No hay tareas pendientes!</p>
      ) : (
        sortedTasks.map((task) => (
          // 4. Pasamos cada tarea al componente TaskItem
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
}