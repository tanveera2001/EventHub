// src/components/LandingPage.js

import React from 'react';
import './LandingPage.css'; // Import CSS for styling

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to EventHub</h1>
                <p>Your one-stop solution for all events!</p>
                <button className="get-started-btn">Get Started</button>
            </header>
            <section className="landing-features">
                <h2>Features</h2>
                <ul>
                    <li>Discover events happening near you</li>
                    <li>Manage your events effortlessly</li>
                    <li>Connect with like-minded individuals</li>
                </ul>
            </section>
        </div>
    );
};

export default LandingPage;
