import React, {useEffect, useState} from 'react';
import EventDetail from '../components/EventDetail';
import {useParams} from 'react-router-dom';
import fetchData from "../helpers/fetchData";


const TentipiPage = () => {
    const [comparisonData, setComparisonData] = useState(null);

    useEffect(() => {
        const fetchComparisonData = async () => {
            try {
                const data = await fetchData(
                    `
                    query Comparison {
                        Comparison {
                            ID
                            Title
                            Type1
                            Type2
                        }
                    }
                    `,
                    {} // pass empty object for variables
                );
                setComparisonData(data.data.Comparison);
            } catch (error) {
                console.error('Error fetching comparison data:', error);
                // Handle error
            }
        };
        fetchComparisonData();
    }, []);

    return (
        <div>
            <h2>Tentipi Comparison</h2>
            {comparisonData && comparisonData.map((item) => (
                <div key={item.ID}>
                    <h3>{item.Title}</h3>
                    <p>Type 1: {item.Type1}</p>
                    <p>Type 2: {item.Type2}</p>
                </div>
            ))}
        </div>
    );
};

export default TentipiPage;