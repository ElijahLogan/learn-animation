import React, {useState} from "react";
import { useSpring, animated } from "react-spring";

const Checkout = ({isOpen}) => {
    let animation = useSpring({
        transform: isOpen ? `translate3d(0, 0,0)`:`translate3d(100%, 0,0)  `
       });
       let {x} = useSpring({
        x: isOpen ? 0:100
       });
    return ( 
        <div className="checkout" style={{
            "pointerEvents": isOpen ? 'all': 'none'
        }}>
       
            <animated.div style={{transform: x.interpolate(x =>`translate3d(${-1 *x}%,0,0`)}} className="checkout-left">   </animated.div>
            <animated.div style={{transform: x.interpolate(x =>`translate3d(${x}%,0,0`)}} className="checkout-right"> </animated.div>
        </div>
    );
}

export default Checkout;