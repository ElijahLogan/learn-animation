import React, {  useState, Component } from 'react';
import { useSpring, animated, useTransition} from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Nav from './nav';
import Checkout from './checkout';
const App = () => {
  const [items, setItems] = useState([{letter:'6',key:1},{letter:'7',key:2}, {letter:'8',key:3}])
  // params: boolena, keys, object: from/enter/leave
  const transition = useTransition(items,item => item.key,{
    // position absolute: relative container needed to manage it
    from: {opacity:0},
    enter: {opacity:1},
    leave: {opacity:0}
  }
  )

  return (
    <div >

      {transition.map(
            ({item, key,props}) => 
           
             <animated.h1 key ={key} style={props}>
                {items.letter}
              </animated.h1>
            
            )}


      <button onClick={() => setItems({"letter":6, key:1})}>Toggle</button>
    </div>
  );
}




export default App;




// const App = () => {
//   const [isToggled, setToggle] = useState(false)
//   // params: boolena, keys, object: from/enter/leave
//   const transition = useTransition(isToggled,null,{
//     // position absolute: relative container needed to manage it
//     from: {opacity:0,  position: 'absolute'},
//     enter: {opacity:1},
//     leave: {opacity:0}
//   }
//   )

//   return (
//     <div style = {{position:'relative'}}>

//       {transition.map(
//             ({item, key,props}) => 
//             (item ?
//              (<animated.h1 key ={key} style={props}> 
//               Hello World</animated.h1>) 
//               : 
//               ( <animated.h1 key ={key} style={props}> 
//                 Bye World </animated.h1>)
            
//             ))}


//       <button onClick={() => setToggle(!isToggled)}>Toggle</button>
//     </div>
//   );
// }




// export default App;