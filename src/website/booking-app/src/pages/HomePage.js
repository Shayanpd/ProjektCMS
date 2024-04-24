// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import EventList from '../components/EventList';
import './HomePage.css'; // Add this line to import styles



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
                {isSuccess && Home_Page.map((post) => (
                    <div key={post.id}>
                        <img src={`http://localhost:8055/assets/${post.image.id}`} alt="Home Page Visual" />
                        <h3>{post.title}</h3> {/* Display title */}
                        <div
                            dangerouslySetInnerHTML={{ __html: post.body }} // Render body as HTML
                            className="homepage-body"
                        ></div>
                    </div>
                ))}
            </div>
            <div className="fetch-events-button-container">
                <button
                    onClick={retrieveTestCollectionFromCMS}
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