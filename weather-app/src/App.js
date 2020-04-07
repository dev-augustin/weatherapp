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
    <div className="App">
         
    </div>
  );
}

export default App;
