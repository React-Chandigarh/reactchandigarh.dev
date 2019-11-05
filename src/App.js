import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Switch>
        <Route path="/about" component={() => <p>About</p>} />
        <Route path="/contact" component={() => <p>Contact</p>} />
        <Route path="/team" component={() => <p>Team</p>} />
        <Route path="/news" component={() => <p>News</p>} />
        <Route path="/blogs" component={() => <p>Blogs</p>} />
        <Route path="/" component={() => (
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
        )}
        />
      </Switch>
    </div>
  );
}

export default App;
