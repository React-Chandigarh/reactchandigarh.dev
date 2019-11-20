import React from 'react';
import logo from './logo.svg';
import './home.css';

const Home = () => (
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Welcome to React Chandigarh!
        </p>
        <a
            className="App-link"
            href="https://www.meetup.com/Chandigarh-React-Developers/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Visit our meetup group.
        </a>
    </>
);

export default Home;
