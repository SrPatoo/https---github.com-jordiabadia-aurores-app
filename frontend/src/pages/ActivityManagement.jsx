import React, { useEffect, useState } from 'react';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import { fetchActivities, createActivity, updateActivity, deleteActivity } from '../services/activityService';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ActivityManagement = () => {
    const [activities, setActivities] = useState([]);
    const [editingActivity, setEditingActivity] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const response = await fetchActivities();
                setActivities(response);
            } catch (error) {
                console.error('Error loading activities:', error);
            }
        };
        loadActivities();
    }, []);

    const handleCreate = async (activityData) => {
        try {
            const newActivity = await createActivity(activityData);
            setActivities([...activities, newActivity]);
            setConfirmationMessage('Actividad creada correctamente');
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error creating activity:', error);
        }
    };

    const handleUpdate = async (activityData) => {
        try {
            const updatedActivity = await updateActivity(editingActivity.activity_id, activityData);
            setActivities(activities.map(activity => activity.activity_id === editingActivity.activity_id ? updatedActivity : activity));
            setEditingActivity(null);
            setConfirmationMessage('Actividad actualizada correctamente');
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error updating activity:', error);
        }
    };

    const handleDelete = async (activityId) => {
        try {
            await deleteActivity(activityId);
            setActivities(activities.filter(activity => activity.activity_id !== activityId));
            setConfirmationMessage('Actividad eliminada correctamente');
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error deleting activity:', error);
        }
    };

    const handleEdit = (activity) => {
        setEditingActivity(activity);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setConfirmationMessage('');
    };

    return (
        <div>
            <h1>Gestión de Actividades</h1>
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
            <ActivityForm onSubmit={editingActivity ? handleUpdate : handleCreate} initialData={editingActivity} confirmationMessage={confirmationMessage} />
            <ActivityList activities={activities} onEdit={handleEdit} onDelete={handleDelete} confirmationMessage={confirmationMessage} />
        </div>
    );
};

export default ActivityManagement;
