import React, { useState } from 'react';
import './BookingForm.css'; // Make sure your CSS is updated accordingly
import { useCart } from './cart/CartContext';
import { getTicketsForEvent } from "../queries/TicketQueries";


const BookingForm = ({ eventId }) => {
    const [totalTickets, setTotalTickets] = useState(500); // Total available tickets
    const [numberOfTickets, setNumberOfTickets] = useState(1); // Number of tickets to buy
    const [message, setMessage] = useState('');
    const { addToCart } = useCart();
    const [tickets, setTickets] = useState([]);



    /*const handleInputChange = (e) => {
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

    );*/
    const handleInputChange = (e) => {
        setNumberOfTickets(parseInt(e.target.value, 10)); // Ensure the value is a number
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const ticket = {
            id: 10,  // Assuming eventId is unique for each ticket
            antal: 1,
            price: 100 * numberOfTickets,  // Replace with actual price if available
        };

        const testGetTicketsForEvent = async () => {
            const testEventId = eventId; // Replace with a valid eventId for testing

            try {
                const ticketsData  = await getTicketsForEvent(testEventId);
                console.log('Fetched tickets data:', ticketsData);



                if (Array.isArray(ticketsData.Tickets) && ticketsData.Tickets.length > 0) {
                    console.log('Nested Ticket id:', ticketsData.Tickets[0].id);
                    console.log('Nested Ticket price:', ticketsData.Tickets[0].Price);

                    ticket.id= ticketsData.Tickets[0].id
                    ticket.price= ticketsData.Tickets[0].Price
                    ticket.antal= ticketsData.Tickets[0].Number_Of_Tickets - ticketsData.Tickets[0].Number_Of_Tickets+1

                } else {
                    console.error('No tickets found for the event.');
                    return null;
                }
            } catch (error) {
                console.error('Error fetching tickets:', error);
                return null;
            }
        };

        testGetTicketsForEvent();




        if (numberOfTickets > 0 && numberOfTickets <= totalTickets) {
            addToCart(ticket); // Add the ticket object to the cart
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
