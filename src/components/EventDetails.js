// src/components/EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  
  // Sample event details (you can fetch from API in a real app)
  const eventDetails = {
    1: { name: 'Music Concert', date: '2024-10-10', location: 'New York', description: 'A live music concert featuring popular artists.' },
    2: { name: 'Art Exhibition', date: '2024-11-05', location: 'San Francisco', description: 'A modern art exhibition showcasing works of local artists.' },
  };

  const event = eventDetails[id];

  return (
    <div>
      {event ? (
        <>
          <h1>{event.name}</h1>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
        </>
      ) : (
        <p>Event not found!</p>
      )}
    </div>
  );
};

export default EventDetails;
