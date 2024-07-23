import React from "react";
import { animated } from "react-spring";
const Nav = ({style}) => {
  return( 
    <animated.div className="nav-wrapper" style={style}>
    <nav>
        <a href = "">life</a>
        <a href = "">love</a>
        <a href = "">imagery</a>
        <a href = "">time</a>
    </nav>

</animated.div>

  )
  }
export default Nav;