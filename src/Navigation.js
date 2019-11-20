import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/team">The Team</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
    </ul>
);

export default Navigation;
