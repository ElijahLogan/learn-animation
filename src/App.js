import React, {  useState, Component } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Routes from './routes';
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
        <Routes/>
        <Toggle/>
      </main>
      
    </animated.div>
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