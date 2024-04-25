// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css'; // Don't forget to create a CSS file for styling

const BookingForm = ({ eventId }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        numberOfTickets: 1,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Here you would typically send the data to the server
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h2>Book Your Tickets</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
            />
            <input
                type="number"
                name="numberOfTickets"
                value={formData.numberOfTickets}
                onChange={handleInputChange}
                min="1"
                placeholder="Number of Tickets"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookingForm;
