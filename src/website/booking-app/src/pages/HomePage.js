import React, { useState, useEffect } from 'react';
import Footer from '../components/common/Footer';
import EventList from '../components/EventList';
import './HomePage.css'; // Add this line to import styles
import { useQuery, useQueryClient } from 'react-query';
import { getHomepage } from '../queries/getHomePage.js';
import { fetchTokens } from '../mutations/authenticate.js';
import { refreshTokens } from '../mutations/refreshAuthentication.js';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
    console.log("HomePage is rendering");
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();
    const { status, data: Home_Page, error, isFetching, isSuccess } = useQuery("Home_Page", async () => await getHomepage());

    console.log(Home_Page);

    useEffect(() => {
        fetchTokens();
    }, []);

    const retrieveTestCollectionFromCMS = async () => {
        setLoading(true); // Indicate the start of an API call

        try {
            const accessToken = localStorage.getItem('access_token');

            if (!accessToken) {
                await fetchTokens();
            }

            const response = await fetch('http://localhost:8055/items/test', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            if (!response.ok) {
                if (response.status === 401) {
                    await refreshTokens();
                    // Retry fetching data with new token
                    const refreshedResponse = await fetch('http://localhost:8055/items/test', {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        }
                    });
                    if (!refreshedResponse.ok) {
                        throw new Error('Failed to fetch data');
                    }
                } else {
                    throw new Error('Failed to fetch data');
                }
            }

            const responseData = await response.json();
            console.log(responseData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            // Show 404 error message
        }
    };

    return (
        <div>
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
                {/* <button
                    onClick={retrieveTestCollectionFromCMS}
                    disabled={loading}
                    className="fetch-events-button"
                >
                    {loading ? 'Loading...' : 'Connect To CMS'}
                </button>*/}
                <Link to="/about">
                    <button className="about-page-button-container">
                        About Page
                    </button>
                </Link>
            </div>
            <EventList />
            <Footer />
        </div>
    );
};

export default HomePage;
