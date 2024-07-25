// App.js
import React, { useContext, createContext} from 'react';
import { Route, Switch, Link, useLocation, BrowserRouter } from "react-router-dom";
import { animated,useTransition } from 'react-spring';

const Home = () => <div className="page-route">Home Page</div>;
const About = () => <div className="page-route two">About Page</div>;
const Contact = () => <div className="page-route three">Contact Page</div>;

function useRouter(){
  
  const location = useLocation();
  const pathname = location.pathname;
  const location_path = React.createContext(pathname);
  return location
}
function reload(){
  window.location.reload()

}

function NavLink(props){
    return(
        <li>
            <Link {...props}/>
        </li>
    )
}
const Routes = () => {

  return (
    <BrowserRouter>
      <ul className='router-nav'>
      
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </ul>
<Main/>
</BrowserRouter>
)}

const Main =  () => {
  const location_path = useRouter()
  let pathname = location_path.pathname
  // location path works from object useLocation but not the contexts or self made objects
  
  const transitions = useTransition(location_path, location=> location.key,{
    // transform3d Takes x, y and z values
    from: {opacity:0, position:`absolute`, width:'100%', transform:'translate3d(100%,0,0)'},
    enter: {opacity:1, transform:'translate3d(0,0,0)'},
    leave: {opacity:0, transform:'translate3d(-50%,0,0)'}
  })
    // Transition is just renaming props since props is so commonly used
    return transitions.map( ({item,props:transition,key}) => (
      <animated.div key={key} style={transition}>
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </animated.div>
    ))
 
    
};

export default Routes;
