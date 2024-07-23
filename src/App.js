import React, {  useState, Component } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Nav from './nav';
import Checkout from './checkout';
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

let {x} = useSpring({
  x: isToggled ? 0:100
 });

let navAnimate = useSpring({
 transform: isNav ? `translate3d(0, 0,0)`:`translate3d(100%, 0,0)`
})
console.log(fade)

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
    {/* // emulating keyframes */}
      <animated.h1 style={{
        transform: x.interpolate({
          range:[0,.25,.50,.86,100], 
          output:[0, 50, 75,85,100]}).interpolate(
          x => `translate3d(${x}%,0,0)`)
      }}>hello world </animated.h1>


        <img src={logo} className="logo" />
        <button className="menu-button" onClick = {() => setNav(!isNav)}>change nav</button>
   
      {/* <Nav style={navAnimate}/> */}
      </header>
      <main>
        <button onClick = {()=> {setToggle(!isToggled)}}> hello button</button>
        <Toggle />
        <Checkout isOpen={isNav}/>
      </main>
    </animated.div>
  );
}




export default App;