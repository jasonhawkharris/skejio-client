import React from 'react';
import Nav from './components/sidebar/Nav';
import Routes from './config/Routes';
import './App.css';

function App(props) {
  return (
    <div className='App'>
      <div>
        <Nav />
      </div>
      <div className='main'>
        <Routes />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
