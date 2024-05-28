// src/components/Calendario.jsx
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MiCalendario = () => {
    const [events, setEvents] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        start: '',
        end: ''
    });

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/events');
                const data = await response.json();
                setEvents(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents([]);
            }
        };

        fetchEvents();
    }, []);

    const handleDateChange = (date) => {
        const start = new Date(date);
        const end = new Date(date);
        end.setHours(end.getHours() + 1);

        setFormData({
            ...formData,
            start: start.toISOString().slice(0, 16),
            end: end.toISOString().slice(0, 16)
        });
        setModalIsOpen(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    ...formData,
                    start: new Date(formData.start).toISOString(),
                    end: new Date(formData.end).toISOString()
                })
            });
            const newEvent = await response.json();
            setEvents([...events, newEvent]);
            setModalIsOpen(false);
            setFormData({
                title: '',
                description: '',
                start: '',
                end: ''
            });
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <Calendar onClickDay={handleDateChange} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Crear Evento"
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
                <h2>Añadir Evento</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Título"
                        className="p-2 border rounded w-full mb-4"
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descripción"
                        className="p-2 border rounded w-full mb-4"
                    />
                    <input
                        type="datetime-local"
                        name="start"
                        value={formData.start}
                        onChange={handleChange}
                        className="p-2 border rounded w-full mb-4"
                    />
                    <input
                        type="datetime-local"
                        name="end"
                        value={formData.end}
                        onChange={handleChange}
                        className="p-2 border rounded w-full mb-4"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Guardar Evento</button>
                </form>
            </Modal>
            <ul className='mt-6 flex flex-col gap-4 items-center justify-center mb-10'>
                {events.map((event, index) => (
                    <li key={event.id || index}>
                        <h3 className="text-2xl font-bold">{event.title}</h3>
                        <p className="text-lg">{event.description}</p>
                        <p className="text-lg">Inici activitat: {new Date(event.start).toLocaleString()}</p>
                        <p className="text-lg">Final activitat: {new Date(event.end).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MiCalendario;
