import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Datos simulados iniciales
    const datosSimulados = [
      { id: 1, titulo: "Revisar entregas", estado: "Pendiente" },
      { id: 2, titulo: "Actualizar presentación", estado: "En proceso" },
      { id: 3, titulo: "Enviar correos", estado: "Completado" }
    ];
    setTareas(datosSimulados);
  }, []);

  // Función para agregar una nueva tarea simulada
  const agregarTarea = () => {
    const nuevaTarea = {
      id: tareas.length + 1,
      titulo: `Nueva tarea ${tareas.length + 1}`,
      estado: "Pendiente"
    };
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: Usuario de prueba</p>
      <p>Email: usuario@correo.com</p>

      <h2>Mis Tareas</h2>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            {tarea.titulo} - Estado: {tarea.estado}
          </li>
        ))}
      </ul>

      <button onClick={agregarTarea}>Agregar nueva tarea</button>

      <br /><br />
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}

export default Profile;
