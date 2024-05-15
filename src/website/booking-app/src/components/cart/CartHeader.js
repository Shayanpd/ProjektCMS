import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import cartImage from '../../resources/Cart.png'; // Adjust this path as needed

const CartHeader = () => {
    const { cartItemCount } = useCart();

    return (
        <div className="header">
            <Link to="/">
                <h1>Home Page</h1>
            </Link>
            <div className="cart">
                <Link to="/cart">
                    <img src={cartImage} alt="Cart" />  {/* Check this line */}
                    <span>{cartItemCount}</span>
                </Link>
            </div>
        </div>
    );
};

export default CartHeader;
