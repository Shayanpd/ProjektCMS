// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import EventList from '../components/EventList';
import eventImage from '../resources/events.png';
import './HomePage.css'; // Add this line to import styles
import { createDirectus, graphql } from '@directus/sdk';

interface test {
    id: Number;
    Name: string;
    description: string;
}

import {useQuery} from 'react-query' 
import { getHomepage } from '../queries/queries.js';

const HomePage = () => {
    console.log("HomePage is rendering");
    const [loading, setLoading] = useState(false);

    const { status, data: Home_Page, error, isFetching, isSuccess } = useQuery("Home_Page", async () => await getHomepage())

    console.log(Home_Page)

    useEffect(() => {

        if (!localStorage.getItem('access_token')) {
            fetch('http://localhost:8055/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: process.env.REACT_APP_EMAIL,
                    password: process.env.REACT_APP_PASSWORD
                })
            })
            .then(res => res.json())
            .then(authData => {
                // Extract access_token from response and save in localStorage
                const accessToken = authData.data.access_token;
                localStorage.setItem('access_token', accessToken);
                console.log('Updated token!')  
            })
        }
        
    }, []);
    
    const retrieveTestCollectionFromCMS = () => {
        setLoading(true); // Indicate the start of an API call
        
        // Use access_token for a GET-request
        fetch('http://localhost:8055/items/test', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res => res.json())
        .then(responseData => {
            console.log(responseData);
            setLoading(false);
        })
        
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
                    onClick={() => retrieveTestCollectionFromCMS()}
                    disabled={loading}
                    className="fetch-events-button"
                >
                    {loading ? 'Loading...' : 'Connect To CMS'}
                </button>
            </div>
            <EventList />
            <Footer />
            {isSuccess && Home_Page.map( (post) => (<div><img src={`http://localhost:8055/assets/${post.image.id}`} alt="Home Page Visual" /></div>))}
        </div>
    );
};

export default HomePage;