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
        <br />
        <br />
        <a
            className="App-link App-link-button"
            href="https://forms.gle/sjaaCwG65zVtKsMF6"
            target="_blank"
            rel="noopener noreferrer"
        >Please let us know if you have any Feedback for us.</a>
        <br />
        <br />
        <p className="App-link">Email us at reactdevchd@gmail.com</p>
    </>
);

export default Home;
