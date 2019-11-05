import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <ul>
        <Link to="/about">About Us</Link>
        <Link to="/news">News</Link>
        <Link to="/team">The Team</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact Us</Link>
    </ul>
);

export default Navigation;
