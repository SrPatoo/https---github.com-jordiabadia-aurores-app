import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Usuario registrado:', data);
                window.location.href = '/login';
            } else {
                console.error('Error al registrar usuario:', data);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-4">Registrarse</h1>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Nombre de usuario"
                    className="p-2 border rounded w-full mb-4"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    className="p-2 border rounded w-full mb-4"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    className="p-2 border rounded w-full mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
