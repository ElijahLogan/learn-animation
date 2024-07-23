import React, {  useState, Component } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Nav from './nav';
const App = () => {
  const [isToggled, setToggle] = useState(false)
  const [isNav, setNav] = useState(false)
// create object of animation'
const fade  = useSpring({
  from:{
    opacity:0
  },

    opacity:1

});

let navAnimate = useSpring({
 transform: isNav ? `translate3d(0, 0,0) scale(1)  `:`translate3d(-100%, 0,0) scale(0.6) `
})
console.log(fade)

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" />
        <button className="menu-button" onClick = {() => setNav(!isNav)}>change nav</button>

      <Nav style={navAnimate}/>
      </header>
      <main>
        <Toggle/>
      </main>
    </animated.div>
  );
}




export default App;