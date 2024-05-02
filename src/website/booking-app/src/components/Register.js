
import React from 'react';
import './Login.css';     // Importing styles specific to the Login button, same as Login.js

const Register = ({ onLoginClick }) => {
    return (
        <button onClick={onLoginClick} className="button">
            <div className="button-top">Register</div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
        </button>
    );
};

export default Register;

