import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actions';

// 1. Define el estado inicial, un objeto con un array de tareas vacío
const initialState = { tasks: [] };

// 2. Esta es la función reductora
function taskReducer(state = initialState, action) {
  
  // 3. El switch revisa el "tipo" de acción que llegó
  switch (action.type) {
    
    // Caso: 'ADD_TASK'
    case ADD_TASK:
      // Devuelve un NUEVO objeto de estado
      return {
        ...state, // Copia todo lo que ya tenía el estado 
        // Crea un NUEVO array de tareas
        tasks: [
          ...state.tasks,  // Copia todas las tareas antiguas
          action.payload   // Y añade la tarea nueva que viene en 'payload'
        ]
      };

    // Caso: 'TOGGLE_TASK'
    case TOGGLE_TASK:
      return {
        ...state,
        // .map() crea un NUEVO array
        tasks: state.tasks.map(task =>
          // Si esta es la tarea que buscamos (por su id)...
          task.id === action.payload 
            // ...devuelve una COPIA de la tarea, pero con 'completada' al revés
            ? { ...task, completada: !task.completada } 
            // ...si no es, devuélvela tal como estaba
            : task
        )
      };

    // Caso: 'DELETE_TASK'
    case DELETE_TASK:
      return {
        ...state,
        // .filter() crea un NUEVO array solo con las tareas
        // que NO coincidan con el id que queremos borrar
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    // 4. Si no reconoce la acción, devuelve el estado sin cambios
    default:
      return state;
  }
}

export default taskReducer;