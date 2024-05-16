import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import cartImage from '../../resources/Cart.png'; // Verify this path is correct

const CartHeader = () => {
    const { cartItemCount } = useCart();  // Using cartItemCount from context

    return (
        <div className="header">
            <div className="cart">
                <Link to="/cart">
                    <img src={cartImage} alt="Cart" />
                    <span>{cartItemCount}</span>
                </Link>
            </div>
        </div>
    );
};

export default CartHeader;
