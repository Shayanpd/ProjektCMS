// src/App.js
import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage'; // Import the EventPage component
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

// Create a client
const queryClient = new QueryClient();

const App = () => {
    console.log("App is rendering");
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Header /> {/* Header component */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events/:eventId" element={<EventPage />} /> {/* Route for EventPage */}
                    {/* Other routes will be added here */}
                </Routes>
                <Footer /> {/* Footer component */}
            </Router>
        </QueryClientProvider>
    );
}

export default App;
