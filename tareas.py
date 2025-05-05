// js/tareas.js

const tareas = [
  { id: 1, titulo: "Revisar entregas", estado: "Pendiente" },
  { id: 2, titulo: "Actualizar presentación", estado: "En proceso" },
  { id: 3, titulo: "Enviar correos", estado: "Completado" }
];

window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-tareas");

  if (contenedor) {
    tareas.forEach(tarea => {
      const item = document.createElement("li");
      item.textContent = `${tarea.titulo} - Estado: ${tarea.estado}`;
      contenedor.appendChild(item);
    });
  }
});
