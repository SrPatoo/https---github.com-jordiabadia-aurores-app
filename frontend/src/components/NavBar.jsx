import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
            <div>
                <Link to="/about" className="mr-4">Acerca de Nosotros</Link>
                <Link to="/activities" className="mr-4">Actividades</Link>
                <Link to="/prices" className="mr-4">Precios</Link>
            </div>
            <div>
                {!user && <Link to="/register" className="mr-4">Registrarse</Link>}
                {!user && <Link to="/login" className="mr-4">Iniciar sesión</Link>}
                {user && <Link to="/calendar" className="mr-4">Calendario</Link>}
                {user && user.role_name === 'admin' && <Link to="/dashboard" className="mr-4">Dashboard</Link>}
                {user && user.role_name === 'admin' && <Link to="/dashboard/user-management" className="mr-4">Gestión de Usuarios</Link>}
                {user && user.role_name === 'admin' && <Link to="/dashboard/activity-management" className="mr-4">Gestión de Actividades</Link>}
                {user && <button onClick={logout} className="bg-red-500 text-white p-2 rounded">Cerrar sesión</button>}
            </div>
        </nav>
    );
};

export default NavBar;
