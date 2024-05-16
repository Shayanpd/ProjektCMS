// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage'; // Import the EventPage component
import AboutPage from './pages/AboutPage';
import Header from './components/common/Header';
import CartHeader from './components/cart/CartHeader';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import CartPage from './components/cart/CartPage';


// Create a client
const queryClient = new QueryClient();

const App = () => {
    console.log("App is rendering");
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
            <Header />
            <CartHeader />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/events/:eventId" element={<EventPage />} /> {/* Route for EventPage */}
                    <Route path="/cart" element={<CartPage />} /> {/* Use element prop */}
                    {/* Other routes will be added here */}
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
