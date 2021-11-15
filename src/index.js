import React from "react";
import reactDom from "react-dom";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

reactDom.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode> 
    </Router>,
    document.getElementById('root')
);