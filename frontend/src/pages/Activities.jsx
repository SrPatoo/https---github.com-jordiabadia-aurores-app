// src/pages/Activities.jsx
import { useEffect, useState } from 'react';
import { fetchActivities } from '../services/activityService';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const fetchedActivities = await fetchActivities();
                setActivities(fetchedActivities);
            } catch (error) {
                console.error('Error loading activities:', error);
            }
        };

        loadActivities();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Actividades</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map(activity => (
                    <div key={activity.activity_id} className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{activity.name}</h2>
                        <p>{activity.description}</p>
                        <p className="mt-2 text-gray-600">Precio: ${activity.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activities;
