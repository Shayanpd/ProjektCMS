import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);  // Initialize as an empty array

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
    );
};

export const useCart = () => useContext(CartContext);
