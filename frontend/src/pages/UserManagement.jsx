import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/userService';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetchUsers();
                setUsers(response);
            } catch (error) {
                console.error('Error loading users:', error);
            }
        };
        loadUsers();
    }, [confirmationMessage]);

    const handleCreate = async (userData) => {
        try {
            const newUser = await createUser(userData);
            setUsers([...users, newUser]);
            setConfirmationMessage('Usuario creado correctamente');
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleUpdate = async (userData) => {
        try {
            const updatedUser = await updateUser(editingUser.user_id, userData);
            setUsers(users.map(user => user.user_id === editingUser.user_id ? updatedUser : user));
            setEditingUser(null);
            setConfirmationMessage('Usuario actualizado correctamente');
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user.user_id !== userId));
            setConfirmationMessage('Usuario eliminado correctamente');
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setConfirmationMessage('');
    };

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <UserForm onSubmit={editingUser ? handleUpdate : handleCreate} initialData={editingUser} />
            <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Mensaje de Confirmación"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >
                <h2>Mensaje de Confirmación</h2>
                <p>{confirmationMessage}</p>
                <button onClick={handleCloseModal}>Cerrar</button>
            </Modal>
        </div>
    );
};

export default UserManagement;
