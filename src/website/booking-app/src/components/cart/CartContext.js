import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    /*const [cartItems, setCartItems] = useState([]);  // Initialize as an empty array


    const addToCart = (number) => {
        // Assuming number is the quantity of a specific item you want to add
        // Here's how you might update it if you just track quantity
        const newItems = new Array(number).fill("item");  // Just an example to fill the array
        setCartItems(currentItems => currentItems.concat(newItems));  // Adds new items to the array
    };



    return (
        <CartContext.Provider value={{ cartItems, cartItemCount: cartItems.length, addToCart }}>
            {children}
        </CartContext.Provider>
    );*/
    const [cartItems, setCartItems] = useState([]);  // Initialize as an empty array
    const [cartItemCount, setCartItemCount] = useState(0); // Initialize the total count of items

    const addToCart = (ticket) => {
        setCartItems(currentItems => [...currentItems, ticket]);  // Adds the new ticket object to the array
        setCartItemCount(currentCount => currentCount + ticket.antal); // Update the total count
    };

    const removeFromCart = (ticketId) => {
        const ticketToRemove = cartItems.find(item => item.id === ticketId);
        if (ticketToRemove) {
            setCartItems(currentItems => currentItems.filter(item => item.id !== ticketId)); // Remove the ticket
            setCartItemCount(currentCount => currentCount - ticketToRemove.antal); // Decrement the total count
        }
    };
    const buyTickets = () => {
        const totalTickets = cartItems.reduce((acc, ticket) => acc + ticket.antal, 0);
        alert(`You have successfully bought ${totalTickets} tickets.`);
        setCartItems([]);
        setCartItemCount(0);
    };

    return (
        <CartContext.Provider value={{ cartItems, cartItemCount, addToCart, removeFromCart, buyTickets }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
