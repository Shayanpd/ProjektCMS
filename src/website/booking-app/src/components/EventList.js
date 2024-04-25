// src/components/EventList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CountdownTimer from './CountdownTimer';
import './EventList.css'; // Make sure to create this CSS file

import { useQuery } from 'react-query';
import { getHomePageEvents } from "../queries/EventListQueries";





const EventList = () => {
    const { status,data: eventsListData, error, isLoading, isSuccess } =
        useQuery("Event_List", async () => await getHomePageEvents())

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    console.log(eventsListData)

    return (
        <div className="event-list">
            {isSuccess && eventsListData.map(event =>  (
                <div className="event-card" key={event.id}>
                    <div className="event-image-container">

                        <img src={event.image && `http://localhost:8055/assets/${event.image.id}`} alt={event.title} className="event-image" />


                        <div className="event-timer">
                            <CountdownTimer eventDate={event.Date} />
                        </div>
                    </div>
                    <div className="event-info">
                        <Link to={`/events/${event.id}`} className="event-link">
                            <h2>{event.title}</h2>
                        </Link>
                        <p className="event-date">{event.Date}</p>
                        <p className="event-description">{event.Short_Descrition}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventList;
