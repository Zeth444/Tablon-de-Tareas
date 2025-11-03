import { useDispatch } from 'react-redux';
import { TOGGLE_TASK, DELETE_TASK } from '../redux/actions';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: TOGGLE_TASK, payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_TASK, payload: task.id });
  };

  // Esta línea crea la clase CSS dinámica
  const itemClassName = `task-item ${task.completada ? 'completada' : ''}`;

return (
    <div className={itemClassName}>
      <input
        type="checkbox"
        checked={task.completada}
        onChange={handleToggle}
      />
      
      {/* 👇 AÑADE el style={{ flexShrink: 1 }} aquí 👇 */}
      <span style={{ flexShrink: 1 }}> 
        {task.titulo}
      </span>

      <button onClick={handleDelete}>
        Eliminar
      </button>
    </div>
  );
}