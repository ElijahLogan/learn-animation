import React, {useState} from "react";
import  {useSpring, animated } from 'react-spring';



const Toggle = () => {
    const [isToggled, setToggle] = useState(false)
    //from: is initial state
    //no from property it starts at the to 
    const fade = useSpring({
        opacity: isToggled ? 0 : 1 
    })

   
    return (
        <div> 
            <animated.h1 style = {fade}>hello</animated.h1>
            <button onClick={() => setToggle(!isToggled)}> Toggle</button>
        </div>
    )
}

export default Toggle;