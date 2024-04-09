// src/pages/HomePage.js
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import EventList from '../components/EventList';
import eventImage from '../resources/events.png';

const HomePage = () => {
    console.log("HomePage is rendering");
    return (
        <div>
            <Header />
            <div className="homepage-banner">
                <img src={eventImage} alt="Banner" />
            </div>
            <EventList />
            <Footer />
        </div>
    );
};

export default HomePage;
