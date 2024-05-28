// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const { user } = useAuth();

    return (
        <div className="h-screen p-5 shadow-lg bg-gray-800 text-white w-64">
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
            <div className="mb-8">
                {user && (
                    <>
                        <h2 className="text-lg font-semibold">Name: {user.username}</h2>
                        <p>Role: {user.role_name}</p>
                    </>
                )}
            </div>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="hover:bg-gray-700 p-2 block rounded">Inicio</Link>
                </li>
                <li>
                    <Link to="/dashboard/user-management" className="hover:bg-gray-700 p-2 block rounded">Gestión de Usuarios</Link>
                </li>
                <li>
                    <Link to="/dashboard/activity-management" className="hover:bg-gray-700 p-2 block rounded">Gestión de Actividades</Link>
                </li>
                <li>
                    <Link to="/dashboard/calendar" className="hover:bg-gray-700 p-2 block rounded">Calendario</Link>
                </li>
                {/* más opciones */}
            </ul>
        </div>
    );
};

export default Sidebar;
