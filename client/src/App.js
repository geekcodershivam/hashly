import { Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import Home from './components/Home';
import LandingPage from './components/LandigPage';
import SignIN from './components/SignIn';
import SignUP from './components/SignUp';
import NavBar from './components/NavBar'
import history from './history';
import Redirect from './components/Redirect'

import './App.css';

function App() {
  return (
   
    <Router history={history}>
      <NavBar/>
      <Switch>
     
        <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={SignIN} />
        <Route path="/signup" component={SignUP} />
        <Route path ="/home" component={Home} /> 
        <Route exact path='/:code' component={Redirect} /> 
        

        

      </Switch>
    </Router>
  );
}

export default App;
