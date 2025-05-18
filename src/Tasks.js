import { Link } from 'react-router-dom';

function Tasks() {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        <li>Tarea 1 - Completa</li>
        <li>Tarea 2 - Pendiente</li>
        <li>Tarea 3 - En progreso</li>
      </ul>
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}
export default Tasks;
