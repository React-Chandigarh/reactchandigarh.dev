import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
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
      </header>
    </div>
  );
}

export default App;
