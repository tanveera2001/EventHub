// src/components/EventDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        // Mock API call to fetch event details
        const fetchEventDetails = async () => {
            const response = await fetch(`/api/events/${id}`); // Replace with your actual API endpoint
            const data = await response.json();
            setEvent(data);
        };
        fetchEventDetails();
    }, [id]);

    if (!event) {
        return <div>Loading event details...</div>;
    }

    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
        </div>
    );
};

export default EventDetails;
