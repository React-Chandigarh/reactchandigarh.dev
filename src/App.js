import React from 'react';
import './App.css';
import { MainHeader } from './components/header'
import { BrowserRouter, Route } from 'react-router-dom'
import { Footer } from './components/footer'
import Home from './containers/MainLanding'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader />
        <Route exact path="/" component={Home} />                         
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
