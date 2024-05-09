// src/pages/EventPage.js
import React, {useEffect, useState} from 'react';
import EventDetail from '../components/EventDetail';
import {useParams} from 'react-router-dom';
import fetchData from "../helpers/fetchData";

const EventPage = () => {
    const {eventId} = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {


        // TODO: Replace with actual API call
        const fetchEvent = async () => {
            try {
                const data = await fetchData(
                    `
            query Event_List {
            Event_List(filter: { id: { _eq: "${eventId}" } }) {
                id
                status
                title
                Full_Description
                Short_Description
                Date
                link
                Locations
                image
            }
        }
        `,
         {
          variables: {}
         }
         )
           setEvent(data);

            } catch (error) {
                console.error('Error fetching event:', error);
                // Handle error
            }
        };
        fetchEvent();
    }, [eventId]);

    return (
        <div>
            <EventDetail event={event}/>
        </div>
    );
};

export default EventPage;
