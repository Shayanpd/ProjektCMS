import React, { useState } from 'react';
import './BookingForm.css'; // Make sure your CSS is updated accordingly

const BookingForm = ({ eventId }) => {
    const [numberOfTickets, setNumberOfTickets] = useState(1);

    const handleInputChange = (e) => {
        setNumberOfTickets(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Number of tickets:', numberOfTickets);
        // Here you would typically send the number of tickets to the server
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h2>How Many Tickets Do You Want To Buy?</h2>
            <input
                type="number"
                name="numberOfTickets"
                value={numberOfTickets}
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
