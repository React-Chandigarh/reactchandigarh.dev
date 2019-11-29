import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/About';
import Home from './components/Home/';
import Events from './components/Events/';
import Team from './components/Team/';
import { MainHeader } from './components/Header'

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={() => <p>Contact</p>} />
        <Route path="/team" component={Team} />
        <Route path="/news" component={() => <p>News</p>} />
        <Route path="/events" component={Events} />
        <Route path="/" component={Home}
        />
      </Switch>
    </div>
  );
}

export default App;
