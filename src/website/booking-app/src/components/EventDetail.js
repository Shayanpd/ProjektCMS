import React, { useState, useEffect } from 'react';
import './EventDetail.css';
import BookingForm from './BookingForm';


const EventDetail = ({ event }) => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [isExpired, setIsExpired] = useState(false);

    const handleBookingClick = () => {
        if (!isExpired) {
            setShowBookingForm(true);
        }
    };

    useEffect(() => {
        if (event && event.data.Event_List && event.data.Event_List.length > 0) {
            const interval = setInterval(() => {
                const now = new Date();
                const eventDate = new Date(event.data.Event_List[0].Date);
                const difference = eventDate - now;

                if (difference < 0) {
                    setIsExpired(true);
                    clearInterval(interval);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [event]);

    if (!event || !event.data || event.data.Event_List.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="event-detail-container">
            <h1>{event.data.Event_List[0].title}</h1>
            <img src={`http://localhost:8055/assets/${event.data.Event_List[0].image.id}`}
                 alt={event.title} className="event-image" />
            <p className="event-date">{event.data.Event_List[0].Date}</p>
            <p className="event-location">{event.data.Event_List[0].Location}</p>
            <div className="event-description">{event.data.Event_List[0].Full_Description}</div>
            {!isExpired ? (
                <button className="booking-button" onClick={handleBookingClick}>
                    Book Now
                </button>
            ) : (
                <div className="expired-message">This event is expired</div>
            )}
            {showBookingForm && <BookingForm eventId={event.id} />}
        </div>
    );
};

export default EventDetail;
