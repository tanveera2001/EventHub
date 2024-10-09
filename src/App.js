// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Default route - Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Event List route */}
          <Route path="/events" element={<EventList />} />

          {/* Event Details route */}
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
