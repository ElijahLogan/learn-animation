import React, {  useState, Component } from 'react';
import { useSpring, animated, useTransition} from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Nav from './nav';
import Checkout from './checkout';
const App = () => {
  const [isToggled, setToggle] = useState(false)
  const transition = useTransition(isToggled,null,{
    from: {opacity:0},
    enter: {opacity:1},
    leave: {opacity:0}
  }
  )

  return (
    <div>
      {transition.map(({item, key,props}) => (item && <animated.h1 key ={key} style={props}> Hello</animated.h1>))}
      <animated.h1> Hello</animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
}




export default App;