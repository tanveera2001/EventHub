import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Ensure this file exists for styling

const App = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/events');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Welcome to EventHub</h1>
            <h2>Events</h2>
            <div>
                {events.map((event) => (
                    <div key={event.id}>
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
