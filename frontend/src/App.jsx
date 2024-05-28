import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Prices from './pages/Prices';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendari';
import UserManagement from './pages/UserManagement';
import ActivityManagement from './pages/ActivityManagement';

const App = () => {
    return (
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/prices" element={<Prices />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<PrivateRoute roles={['admin', 'user', 'professional']}><Dashboard /></PrivateRoute>} />
                    <Route path="/calendar" element={<PrivateRoute roles={['admin', 'user', 'professional']}><Calendar /></PrivateRoute>} />
                    <Route path="/user-management" element={<PrivateRoute roles={['admin']}><UserManagement /></PrivateRoute>} />
                    <Route path="/activity-management" element={<PrivateRoute roles={['admin', 'professional']}><ActivityManagement /></PrivateRoute>} />
                    <Route path="/dashboard/calendar" element={<PrivateRoute roles={['admin', 'user', 'professional']}><Calendar /></PrivateRoute>} />
                    <Route path="/dashboard/user-management" element={<PrivateRoute roles={['admin']}><UserManagement /></PrivateRoute>} />
                    <Route path="/dashboard/activity-management" element={<PrivateRoute roles={['admin', 'professional']}><ActivityManagement /></PrivateRoute>} />
                </Routes>
            </Layout>
        </AuthProvider>
    );
};

export default App;
