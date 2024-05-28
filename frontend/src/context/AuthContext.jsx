// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
 
const AuthContext = createContext();
 
export const useAuth = () => {
    return useContext(AuthContext);
};
 
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
        }
        setLoading(false);
    }, []);
 
    const login = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };
 
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };
 
    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};