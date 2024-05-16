// src/components/cart/CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import TicketDetails from './TicketDetails'; // Import the TicketDetails component
import './CartPage.css'; // Optional: Create a CSS file for styling

const CartPage = () => {
    const { cartItems, removeFromCart, buyTickets } = useCart();  // Destructure removeFromCart and buyTickets from useCart

    const handleBuyAll = () => {
        buyTickets();
    };

    const handleRemove = (ticketId) => {
        console.log(`Removing ticket with ID: ${ticketId}`);
        removeFromCart(ticketId); // Use the removeFromCart function
    };

    const handleBuy = (ticketId, antal) => {
        alert(`You have successfully bought ${antal} tickets.`);
        removeFromCart(ticketId); // Remove the ticket after buying
    };

    console.log('Cart Items:', cartItems); // Add console log to check if cartItems are received

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            <div className="ticket-details-container">
                {cartItems.length === 0 ? (
                    <p className="empty-cart">No tickets in the cart.</p>
                ) : (
                    cartItems.map(ticket => (
                        <TicketDetails
                            key={ticket.id}
                            ticket={ticket}
                            onBuy={() => handleBuy(ticket.id, ticket.antal)}
                            onRemove={handleRemove}
                        />
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-actions">
                    <button className="buy-all-button" onClick={handleBuyAll}>Buy All Tickets</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
