// src/components/TicketDetails.js
import React from 'react';
import './TicketDetails.css';

const TicketDetails = ({ ticket, onBuy, onRemove }) => {
    return (
        <div className="ticket-details">
            <img src={ticket.image} alt={`Ticket ${ticket.id}`} className="ticket-image" />
            <div className="ticket-info">
                <p>ID: <span>{ticket.id}</span></p>
                <p>Antal: <span>{ticket.antal}</span></p>
                <p>Price: <span>{ticket.price} SEK</span></p>
            </div>
            <div className="ticket-actions">
                <button className="buy-button" onClick={() => onBuy(ticket.id)}>Buy</button>
                <button className="remove-button" onClick={() => onRemove(ticket.id)}>Remove</button>
            </div>
        </div>
    );
};

export default TicketDetails;
