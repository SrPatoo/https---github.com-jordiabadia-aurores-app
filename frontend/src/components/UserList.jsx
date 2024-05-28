// src/components/UserList.jsx
import PropTypes from 'prop-types';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.map(user => (
                    <li key={user.user_id} className="flex justify-between items-center p-2 border-b">
                        <div>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Role:</strong> {user.Role ? user.Role.role_name : 'N/A'}</p>
                        </div>
                        <div>
                            <button onClick={() => onEdit(user)} className="bg-yellow-500 text-white p-2 rounded mr-2">Editar</button>
                            <button onClick={() => onDelete(user.user_id)} className="bg-red-500 text-white p-2 rounded">Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        user_id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        Role: PropTypes.shape({
            role_name: PropTypes.string
        })
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UserList;
