import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: Usuario de prueba</p>
      <p>Email: usuario@correo.com</p>
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}
export default Profile;
