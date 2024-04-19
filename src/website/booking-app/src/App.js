// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();


const App = () => {
    console.log("App is rendering");
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Other routes will be added here */}
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
