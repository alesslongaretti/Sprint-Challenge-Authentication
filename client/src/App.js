import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Route path="/Login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      </div>
    </Router>
  );
}

export default App;
