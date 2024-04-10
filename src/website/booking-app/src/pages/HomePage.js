// src/pages/HomePage.js
import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import EventList from '../components/EventList';
import eventImage from '../resources/events.png';

const HomePage = () => {
    console.log("HomePage is rendering"); 
    
    useEffect(() => {
        // Create a authenticate-request to retrieve an access_token
        fetch('http://localhost:8055/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'admin@example.com',
                password: 'd1r3ctu5'
            })
        })
        .then(res => res.json())
        .then(authData => {
            // Extract access_token from response
            const accessToken = authData.data.access_token;
    
            // Use access_token for a GET-request
            fetch('http://localhost:8055/items/test', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        })
        .catch(error => {
            console.error('Error authenticating:', error);
        });
    }, []);

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
