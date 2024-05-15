import React from 'react';
import { useCart } from './CartContext';

const Tickets = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Tickets;
