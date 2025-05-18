import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dashboardBg from '../assets/dashboard-bg.jpg';

function Dashboard() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(guardadas);
  }, []);

  const agregarTarea = () => {
    const texto = prompt('Nueva tarea:');
    if (!texto) return;
    const nueva = { id: Date.now(), titulo: texto };
    const actualizadas = [...tareas, nueva];
    setTareas(actualizadas);
    localStorage.setItem('tareas', JSON.stringify(actualizadas));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <button onClick={agregarTarea}>Agregar tarea</button>
  
    <div
      className="screen"
      style={{ backgroundImage: `url(${dashboardBg})` }}
    >
    
    </div>
  

      <ul style={{ marginTop: 15 }}>
        {tareas.map(t => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>

      <Link to="/profile">Ir a Perfil</Link>
    </div>
    
  );
}
export default Dashboard;
