// src/components/ActivityList.jsx
import PropTypes from 'prop-types';

const ActivityList = ({ activities, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Lista de Actividades</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.activity_id} className="flex justify-between items-center p-2 border-b">
                        <div>
                            <p><strong>Nombre:</strong> {activity.name}</p>
                            <p><strong>Descripción:</strong> {activity.description}</p>
                            <p><strong>Precio:</strong> {activity.price}</p>
                            <p><strong>Categoría:</strong> {activity.category_id}</p>
                        </div>
                        <div>
                            <button onClick={() => onEdit(activity)} className="bg-yellow-500 text-white p-2 rounded mr-2">Editar</button>
                            <button onClick={() => onDelete(activity.activity_id)} className="bg-red-500 text-white p-2 rounded">Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ActivityList.propTypes = {
    activities: PropTypes.arrayOf(PropTypes.shape({
        activity_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category_id: PropTypes.number.isRequired,
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ActivityList;
