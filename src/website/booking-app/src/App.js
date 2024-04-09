// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
    console.log("App is rendering");
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Fler rutter kommer att läggas till här */}
            </Routes>
        </Router>
    );
}

export default App;
