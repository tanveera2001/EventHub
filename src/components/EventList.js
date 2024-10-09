// src/components/EventList.js

import React from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
  // Sample events data
  const events = [
    { id: 1, name: 'Music Concert' },
    { id: 2, name: 'Art Exhibition' }
  ];

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
