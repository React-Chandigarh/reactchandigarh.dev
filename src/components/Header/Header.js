  import React from 'react'
  import Navigation from './Navigation';
  import { Logo } from '../Logo'
  
  const Header = () => {
      return (
        <header className="App-header">
          <Logo />
          <Navigation />
        </header>
      )
  }

  export default Header;