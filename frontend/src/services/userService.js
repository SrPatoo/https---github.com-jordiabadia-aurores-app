// src/services/userService.js
export const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/api/users', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        throw new Error('Error fetching users');
    }
    const data = await response.json();
    return data;
};

export const createUser = async (userData) => {
    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Error creating user');
    }
    const data = await response.json();
    return data;
};

export const updateUser = async (userId, userData) => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Error updating user');
    }
    const data = await response.json();
    return data;
};

export const deleteUser = async (userId) => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        throw new Error('Error deleting user');
    }
    return true;
};
