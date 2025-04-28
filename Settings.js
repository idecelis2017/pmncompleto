import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div>
      <h1>Configuraciones</h1>
      <p>Opciones para el usuario.</p>
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}
export default Settings;
