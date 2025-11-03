import { useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // 

function App() {
  // --- Para la Sección III (Contador) ---
  // 1. Usamos useSelector para leer el estado de Redux
  const tasks = useSelector((state) => state.tasks.tasks);

  // 2. Calculamos los contadores
  const completedCount = tasks.filter((task) => task.completada).length;
  const totalCount = tasks.length;
  // --- Fin de la Sección III ---

  return (
    <div className="App">
      <h1>TaskBoard</h1>
      
      {/* 3. Mostramos el contador */}
      <h3>Tareas Completadas: {completedCount} / {totalCount}</h3>

      {/* 4. Mostramos los componentes */}
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;