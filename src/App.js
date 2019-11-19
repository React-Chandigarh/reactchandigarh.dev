import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import AboutUs from './components/About';
import Home from './components/Home/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={() => <p>Contact</p>} />
        <Route path="/team" component={() => <p>Team</p>} />
        <Route path="/news" component={() => <p>News</p>} />
        <Route path="/blogs" component={() => <p>Blogs</p>} />
        <Route path="/" component={Home}
        />
      </Switch>
    </div>
  );
}

export default App;
