// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to EventHub</h1>
            <Link to="/events">View Events</Link>
        </div>
    );
};

export default LandingPage;
