import React, { useState } from 'react';
import './BookingForm.css'; // Make sure your CSS is updated accordingly
import { useCart } from './cart/CartContext';


const BookingForm = ({ eventId }) => {
    const [totalTickets, setTotalTickets] = useState(500); // Total available tickets
    const [numberOfTickets, setNumberOfTickets] = useState(1); // Number of tickets to buy
    const [message, setMessage] = useState('');
    const { addToCart } = useCart();



    const handleInputChange = (e) => {
        setNumberOfTickets(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ticketCount = parseInt(numberOfTickets, 10); // Ensure the count is a number

        console.log(`Submitting form with ticketCount: ${ticketCount}`);
        // Here you would typically send the number of tickets to the server
        if (ticketCount > 0 && ticketCount <= totalTickets) {
            addToCart(ticketCount); // Add the number of tickets to the cart
            setTotalTickets(prev => prev - numberOfTickets); // Decrement the number of available tickets
            setMessage(`You have successfully booked ${numberOfTickets} tickets.`);
        } else {
            setMessage('Not enough tickets available.');
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="booking-form">
                <h2>How Many Tickets Do You Want To Buy? (Available: {totalTickets}):</h2>
                <input
                    type="number"
                    name="numberOfTickets"
                    value={numberOfTickets}
                    onChange={handleInputChange}
                    min="1"
                    max={totalTickets}
                    placeholder="Number of Tickets"
                    required
                />
                <button type="submit" disabled={totalTickets === 0}>Add To Cart</button>
            </form>
            {message && <p>{message}</p>}
        </div>

    );
};

export default BookingForm;
