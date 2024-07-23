import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
const App = () => {
// create object of animation'
const fade  = useSpring({
  from:{
    opacity:0
  },

    opacity:1

});

console.log(fade)

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" />
        <button className="menu-button">Menu</button>
      </header>
      <main>
        <Toggle/>
      </main>
    </animated.div>
  );
}




export default App;
