// App.js
import React, { useContext, createContext} from 'react';
import { Route, Switch, Link, useLocation, BrowserRouter } from "react-router-dom";


const Home = () => <div className="page-route">Home Page</div>;
const About = () => <div className="page-route two">About Page</div>;
const Contact = () => <div className="page-route three">Contact Page</div>;

function useRouter(){
  const location = useLocation();
  const pathname = location.pathname;
  const location_path = React.createContext(pathname);
  return location_path
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
  const location = useContext(location_path);
  console.log('Location:', location)
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
