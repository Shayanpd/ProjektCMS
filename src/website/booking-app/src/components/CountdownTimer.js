// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Import the CSS file


const CountdownTimer = ({ eventDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(eventDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    // Render countdown timer
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
        );
    });

    return (
        <div className="countdown">
            <div className="countdown-item">
                <div className="countdown-number">{timeLeft.days || '0'}</div>
                <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
                <div className="countdown-number">{timeLeft.hours || '00'}</div>
                <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
                <div className="countdown-number">{timeLeft.minutes || '00'}</div>
                <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
                <div className="countdown-number">{timeLeft.seconds || '00'}</div>
                <div className="countdown-label">Seconds</div>
            </div>
        </div>
    );
};

export default CountdownTimer;
