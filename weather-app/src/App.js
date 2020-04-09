import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch,Route, Link
} from "react-router-dom";
import Sunday from './components/Sunday';
import Monday from './components/Monday';
import Tuesday from './components/Tuesday';
import Wednesday from './components/Wednesday';
import Thursday from './components/Thursday';
import Friday from './components/Friday';
import Saturday from './components/Saturday';
import Weather from './components/Weather';
 //console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
      <Router>
           
               <Weather/>
               <nav>
               <Link className="navlinkstyle" to="/Sunday">Sunday</Link>  
               <Link className="navlinkstyle" to="/Monday">Monday</Link>   
               <Link className="navlinkstyle" to="/Tuesday">Tuesday</Link>  
               <Link className="navlinkstyle" to="/Wednesday">Wednesday</Link> 
               <Link className="navlinkstyle" to="/Thursday">Thursday</Link> 
               <Link className="navlinkstyle" to="/Friday">Friday</Link> 
               <Link className="navlinkstyle" to="/Saturday">Saturday</Link> 
               </nav>
              
              {/* <Link to="/Sunday">Sunday</Link>  |
              <Link to="/Monday">Monday</Link>   |
              <Link to="/Tuesday">Tuesday</Link>  |
              <Link to="/Wednesday">Wednesday</Link> |
              <Link to="/Thursday">Thursday</Link> |
              <Link to="/Friday">Friday</Link> |
              <Link to="/Saturday">Saturday</Link>  */}
           <Switch>
            <Route path='/Sunday' component={Sunday}/>
            <Route path='/Monday' component={Monday}>
            
            </Route>
            <Route path='/Tuesday' component={Tuesday}>
             
            </Route>
            <Route path='/Wednesday'>
              <Wednesday/>
            </Route>
            <Route path='/Thursday'>
              <Thursday/>
            </Route>
            <Route path='/Friday'>
              <Friday/>
            </Route>
            <Route path='/Saturday'>
              <Saturday/>
            </Route>
           </Switch>
            {/* <Route path='/Monday' component={Monday}>
            
            </Route>
            <Route path='/Tuesday' component={Tuesday}>
             
            </Route>
            <Route path='/Wednesday'>
              <Wednesday/>
            </Route>
            <Route path='/Thursday'>
              <Thursday/>
            </Route>
            <Route path='/Friday'>
              <Friday/>
            </Route>
            <Route path='/Saturday'>
              <Saturday/>
            </Route>
           </Switch> */}
           
        {/* </Switch> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
