// src/pages/HomePage.js
import React, { useState} from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import EventList from '../components/EventList';
import eventImage from '../resources/events.png';
import './HomePage.css'; // Add this line to import styles

const HomePage = () => {
    console.log("HomePage is rendering");
    const [loading, setLoading] = useState(false);


    const sendRequestToCMS = () => {
        setLoading(true); // Indicate the start of an API call


        // Create an authenticate-request to retrieve an access_token
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
                        setLoading(false); // API call ended, remove loading indication
                        alert('Request sent successfully'); // Show an alert on success
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                        setLoading(false); // API call ended, remove loading indication
                        alert('Failed to send request.'); // Alert the user on error
                    });
            })
            .catch(error => {
                console.error('Error authenticating:', error);
                setLoading(false); // API call ended, remove loading indication
                alert('Authentication failed.'); // Alert the user on error
            });
    };


    return (
        <div>
            <Header />
            <div className="homepage-banner">
                <img src={eventImage} alt="Banner" />
            </div>
            {/* Ensure the className here matches your new CSS for the button container */}
            <div className="fetch-events-button-container">
                {/* Ensure the className here matches your new CSS for the button */}
                <button
                    onClick={sendRequestToCMS}
                    disabled={loading}
                    className="fetch-events-button"
                >
                    {loading ? 'Loading...' : 'Connect To CMS'}
                </button>
            </div>
            <EventList />
            <Footer />
        </div>
    );
};

export default HomePage;