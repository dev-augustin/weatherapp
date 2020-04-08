import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Sunday from './components/Sunday';
import Monday from './components/Monday';
import Tuesday from './components/Tuesday';
import Wednesday from './components/Wednesday';
import Thursday from './components/Thursday';
import Friday from './components/Friday';
import Saturday from './components/Saturday';

console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <Router>
      <div>
        {/* <ul> */}
          {/* <li> */}
            <Link to='/Sunday'>Sunday</Link> |
          {/* </li> */}
          {/* <li> */}
            <Link to='/Monday'>Monday</Link> |
          {/* </li> */}
          {/* <li> */}
            <Link to='/Tuesday'>Tuesday</Link> |
          {/* </li> */}
          {/* <li> */}
            <Link to='/Wednesday'>Wednesday</Link> |
          {/* </li> */}
          {/* <li> */}
            <Link to='/Thursday'>Thursday</Link>   |
          {/* </li> */}
          {/* <li> */}
            <Link to='/Friday'>Friday</Link> |
          {/* </li> */}
          {/* <li> */}
            <Link to='/Saturday'>Saturday</Link> |
          {/* </li> */}
        {/* </ul> */}


        <Switch>
            <Route path='/Sunday'>
              <Sunday/>
            </Route>
            <Route path='/Monday'>
              <Monday/>
            </Route>
            <Route path='/Tuesday'>
              <Tuesday/>
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
      </div>
    </Router>
  );
}

export default App;
