// src/pages/EventPage.js
import React, { useEffect, useState } from 'react';
import EventDetail from '../components/EventDetail';
import { useParams } from 'react-router-dom';

const EventPage = () => {
    const { eventId } = useParams(); // This hooks into the router to get the event ID from the URL
    const [event, setEvent] = useState(null);

    useEffect(() => {
        // TODO: Replace with actual API call
        const fetchEvent = async () => {
            try {
                // Mock data for now, replace this with an actual API call
                const eventData = {
                    id: eventId,
                    title: 'Sample Event',
                    date: '2024-04-10',
                    location: 'Event Venue',
                    description: 'This is a detailed description of the event.',
                    imageUrl: '/path/to/event/image.jpg', // Placeholder image path
                };
                setEvent(eventData);
            } catch (error) {
                console.error('Error fetching event:', error);
                // Handle error
            }
        };

        fetchEvent();
    }, [eventId]);

    return (
        <div>
            <EventDetail event={event} />
        </div>
    );
};

export default EventPage;
