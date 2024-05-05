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
    const openRegisterFromLogin = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    return (
        <header className="site-header">
            <h1>Event Booking System</h1>
            <div className="button-container">
                <Login onLoginClick={toggleLoginModal} />
                <Register onLoginClick={toggleRegisterModal} />
            </div>
            {showLogin && <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onOpenRegister={openRegisterFromLogin} />}
            {showRegister && <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />}
        </header>
    );
};

export default Header;
