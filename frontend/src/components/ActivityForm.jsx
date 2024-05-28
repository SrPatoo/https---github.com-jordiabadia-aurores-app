import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActivityForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category_id: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                description: initialData.description || '',
                price: initialData.price || '',
                category_id: initialData.category_id || ''
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Limpiar el formulario después de enviar
        setFormData({
            name: '',
            description: '',
            price: '',
            category_id: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre de la actividad"
                className="p-2 border rounded"
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descripción"
                className="p-2 border rounded"
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Precio"
                className="p-2 border rounded"
            />
            <input
                type="number"
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                placeholder="ID de Categoría"
                className="p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar</button>
        </form>
    );
};

ActivityForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.string,
        category_id: PropTypes.string
    })
};

export default ActivityForm;
