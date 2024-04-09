// src/components/EventList.js
import React from 'react';
import './EventList.css'; // Make sure to create this CSS file


const events = [
    { id: 1, title: 'Event 1', date: '2024-04-10' },
    { id: 2, title: 'Event 2', date: '2024-05-20' },
    { id: 3, title: 'Event 3', date: '2024-06-02' },

    // ... fler evenemang
];

const EventList = () => {

    return (
        <div className="event-list">
            {events.map(event => (
                <div className="event-card" key={event.id}>
                    <h2>{event.title}</h2>
                    <p>Date: {event.date}</p>
                    {/* Add a button here if you want to link to a detailed view */}
                </div>
            ))}
        </div>
    );
};

export default EventList;
