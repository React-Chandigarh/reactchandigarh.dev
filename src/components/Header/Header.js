  import React from 'react'
  import Navigation from './Navigation';
  import { Logo } from '../Logo'
  
  const Header = () => {
      return (
        <div style={{ width: '80%', margin: '0 auto' }}>
          <header className="App-header">
            <div style={{ width: '40%' }} ><Logo /></div>
            <Navigation />
          </header>
        </div>
      )
  }

  export default Header;