import React from 'react';
import './Login.css'; // Importing styles specific to the Login button

const Login = ({ onLoginClick }) => {
    return (
        <button onClick={onLoginClick} className="button">
            <div className="button-top">Login</div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
        </button>
    );
};

export default Login;
