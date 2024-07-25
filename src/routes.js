// App.js
import React from 'react';
import { Route, Switch, Link,  BrowserRouter } from "react-router-dom";


const Home = () => <div className="page-route">Home Page</div>;
const About = () => <div className="page-route two">About Page</div>;
const Contact = () => <div className="page-route three">Contact Page</div>;


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

const Main = () => {
    return(
    <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    )
};

export default Routes;
