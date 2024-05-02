// src/components/common/Header.js
import React, { useState } from 'react';
import './Header.css';
import Login from '../Login';
import Register from '../Register';
import LoginModal from '../LoginModal';
import RegisterModal from "../RegisterModal";


const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const toggleLoginModal = () => setShowLogin(!showLogin);
    const toggleRegisterModal = () => setShowRegister(!showRegister);

    return (
        <header className="site-header">
            <h1>Event Booking System</h1>
            <div className="button-container">
                <Login onLoginClick={toggleLoginModal} />
                <Register onLoginClick={toggleRegisterModal} /> {/* This can also be modified like Login if needed */}
            </div>
            {showLogin && <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />}
            {showRegister && <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />}
        </header>
    );
};

export default Header;
