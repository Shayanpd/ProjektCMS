// src/components/EventDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';
import BookingForm from './BookingForm';
import Event1 from '../resources/Event1.png';
import Event2 from '../resources/Event2.png';
import Event3 from '../resources/Event3.png';

// Mock event data, this would usually come from a backend or some state management.
const events = [
    { id: 1, title: 'Event 1', date: '2024-04-10', imageUrl: Event1, description: 'More Description for Event 1', location: 'Location 1' },
    { id: 2, title: 'Event 2', date: '2024-05-20', imageUrl: Event2, description: 'More Description for Event 2', location: 'Location 2' },
    { id: 3, title: 'Event 3', date: '2024-06-02', imageUrl: Event3, description: 'More Description for Event 3', location: 'Location 3' },
    // ... more events
];

const EventDetail = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [event, setEvent] = useState(null);
    const { eventId } = useParams();

    useEffect(() => {
        // In a real application, you would fetch the event data from a server
        const eventDetails = events.find(e => e.id === parseInt(eventId));
        setEvent(eventDetails);
    }, [eventId]);

    if (!event) return <div>Loading...</div>; // Or some other loading indicator

    const handleBookingClick = () => {
        setShowBookingForm(true);
    };

    return (
        <div className="event-detail-container">
            <h1>{event.title}</h1>
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
            <div className="event-description">{event.description}</div>
            <button className="booking-button" onClick={handleBookingClick}>
                Book Now
            </button>
            {/* Show BookingForm based on state */}
            {showBookingForm && <BookingForm eventId={event.id} />}
        </div>
    );
};

export default EventDetail;