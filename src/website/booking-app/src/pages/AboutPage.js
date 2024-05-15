import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from "../helpers/fetchData";
import { fetchTokens } from '../mutations/authenticate.js';
import './AboutPage.css'; // Importera CSS-filen

const AboutPage = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                // Ensure access token is available
                let accessToken = localStorage.getItem('access_token');
                if (!accessToken) {
                    await fetchTokens();
                    accessToken = localStorage.getItem('access_token');
                }

                // Fetch About data with the access token
                const response = await fetchData(
                    `
                    query {
                        About_Page {
                            id
                            About_Title
                            About_Text
                        }
                    }
                    `,
                    { variables: {}, token: accessToken }
                );

                setAboutData(response.data.About_Page[0]); // Anta att "About_Page" är en lista och vi tar första objektet
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
        fetchAboutData();
    }, []);

    if (!aboutData) return <div>Loading...</div>;

    return (
        <div className="about-container">
            <h1>{aboutData.About_Title}</h1>
            <p>{aboutData.About_Text}</p>
            <Link to="/">
                <button>Go to Home</button>
            </Link>
        </div>
    );
};

export default AboutPage;
