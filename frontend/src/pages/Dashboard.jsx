// src/pages/Dashboard.jsx
import { Route, Routes } from 'react-router-dom';
import UserManagement from './UserManagement';
import ActivityManagement from './ActivityManagement'; // Actualización aquí
import Calendari from './Calendari';
import PrivateRoute from '../components/PrivateRoute';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <Routes>
                    <Route path="/" element={<h1>Bienvenido al Dashboard</h1>} />
                    <Route path="/user-management" element={<PrivateRoute roles={['admin']}><UserManagement /></PrivateRoute>} />
                    <Route path="/activity-management" element={<PrivateRoute roles={['admin', 'user', 'professional']}><ActivityManagement /></PrivateRoute>} /> {/* Actualización aquí */}
                    <Route path="/calendar" element={<PrivateRoute roles={['admin', 'user', 'professional']}><Calendari /></PrivateRoute>} />
                    {/* más rutas según sea necesario */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
