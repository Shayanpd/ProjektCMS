import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import fetchData from "../helpers/fetchData";
import { fetchTokens } from '../mutations/authenticate.js';
import './AboutPage.css'; // Import the CSS file

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
                            About_Image {
                                id
                                title
                                filename_disk
                            }
                        }
                    }
                    `,
                    { variables: {}, token: accessToken }
                );

                setAboutData(response.data.About_Page[0]); // Assume "About_Page" is a list and take the first item
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
        fetchAboutData();
    }, []);

    if (!aboutData) return <div>Loading...</div>;

    const aboutParagraphs = aboutData.About_Text.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    return (
        <div className="about-container">
            <h1>{aboutData.About_Title}</h1>
            {aboutParagraphs}
            {aboutData.About_Image && (
                <img
                    src={`http://localhost:8055/assets/${aboutData.About_Image.filename_disk}`}
                    alt={aboutData.About_Image.title}
                    className="about-image"
                />
            )}
            {}
            <div className="about-buttons">
                {/*<Link to="/">
                    <button>Go to Home</button>
        </Link>*/}
            </div>
        </div>
    );
};

export default AboutPage;
