// src/components/EventList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CountdownTimer from './CountdownTimer';
import './EventList.css'; // Make sure to create this CSS file
import Event1 from '../resources/Event1.png';
import Event2 from '../resources/Event2.png';
import Event3 from '../resources/Event3.png';


const events = [
    { id: 1, title: 'Event 1', date: '2024-04-10', imageUrl: Event1, description: 'Short Description for Event 1', location: 'Location 1' },
    { id: 2, title: 'Event 2', date: '2024-05-20', imageUrl: Event2, description: 'Short Description for Event 2', location: 'Location 2' },
    { id: 3, title: 'Event 3', date: '2024-06-02', imageUrl: Event3, description: 'Short Description for Event 3', location: 'Location 3' },
    // ... more events
];

const EventList = () => {

    return (
        <div className="event-list">
            {events.map(event => (
                <div className="event-card" key={event.id}>
                    <div className="event-image-container">
                        <img src={event.imageUrl} alt={event.title} className="event-image" />
                        {/* Position the CountdownTimer over the image */}
                        <div className="event-timer">
                            <CountdownTimer eventDate={event.date} />
                        </div>
                    </div>
                    <div className="event-info">
                        <Link to={`/events/${event.id}`} className="event-link">
                            <h2>{event.title}</h2>
                        </Link>
                        <p className="event-date">{event.date}</p>
                        <p className="event-description">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventList;
