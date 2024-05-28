// src/services/activityService.js
export const fetchActivities = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/activities');
        if (!response.ok) {
            throw new Error('Error fetching activities');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching activities:', error);
        throw error;
    }
};

export const createActivity = async (activityData) => {
    try {
        const response = await fetch('http://localhost:3000/api/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(activityData)
        });
        if (!response.ok) {
            throw new Error('Error creating activity');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating activity:', error);
        throw error;
    }
};

export const updateActivity = async (activityId, activityData) => {
    try {
        const response = await fetch(`http://localhost:3000/api/activities/${activityId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(activityData)
        });
        if (!response.ok) {
            throw new Error('Error updating activity');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating activity:', error);
        throw error;
    }
};

export const deleteActivity = async (activityId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/activities/${activityId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (!response.ok) {
            throw new Error('Error deleting activity');
        }
    } catch (error) {
        console.error('Error deleting activity:', error);
        throw error;
    }
};
