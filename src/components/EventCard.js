import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    return (
        <div>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <Link to={`/events/${event.id}`}>View Event</Link>
        </div>
    );
};

export default EventCard;
