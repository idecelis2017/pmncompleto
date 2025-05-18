import { Link } from 'react-router-dom';
import profileBg from '../assets/profile-bg.jpg';
function Profile() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: Usuario de prueba</p>
      <p>Email: usuario@correo.com</p>

      <Link to="/dashboard">Volver al Dashboard</Link>
      <div
      className="screen"
      style={{ backgroundImage: `url(${profileBg})` }}
    >
    
    </div>
  
    </div>
  );
}
export default Profile;
