// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage'; // Import the EventPage component
import TentipiPage from './pages/TentipiPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

// Create a client
const queryClient = new QueryClient();

const App = () => {
    console.log("App is rendering");
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events/:eventId" element={<EventPage />} /> {/* Route for EventPage */}
                    <Route path="/tentipi" element={<TentipiPage />} /> {/* Route for TentipiPage */}
                    {/* Other routes will be added here */}
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
//<Route path="/tentipi" element={<TentipiPage />} /> {/* Route for TentipiPage */}