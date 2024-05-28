// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';
 
const PrivateRoute = ({ roles, children }) => {
    const { user, loading } = useAuth();
 
    if (loading) {
        return null;
    }
 
    if (!user) {
        return <Navigate to="/login" />;
    }
 
    if (roles && roles.length && !roles.includes(user.role_name)) {
        return <Navigate to="/" />;
    }
 
    return children;
};
 
PrivateRoute.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired,
};
 
export default PrivateRoute;