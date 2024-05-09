// src/components/EventDetail.js
import React from 'react';
import './EventDetail.css';
import BookingForm from './BookingForm';

const EventDetail = ({ event }) => {
    const [showBookingForm, setShowBookingForm] = React.useState(false);

    const handleBookingClick = () => {
        setShowBookingForm(true);
    };

    if (!event) return <div>Loading...</div>;

    return (
        <div className="event-detail-container">
            <h1>{event.data.Event_List[0].title}</h1>
            <img src={`http://localhost:8055/assets/${event.data.Event_List[0].image}`}
                 alt={event.title} className="event-image" />
            <p className="event-date">{event.data.Event_List[0].Date}</p>
            <p className="event-location">{event.data.Event_List[0].Location}</p>
            <div className="event-description">{event.data.Event_List[0].Full_Description}</div>
            <button className="booking-button" onClick={handleBookingClick}>
                Book Now
            </button>
            {showBookingForm && <BookingForm eventId={event.id} />}
        </div>
    );
};

export default EventDetail;
