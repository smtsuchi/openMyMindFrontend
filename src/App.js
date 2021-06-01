import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
// import axios from 'axios';
import './App.css';
import Home from './view/auth/Home';
import Login from './view/auth/Login';
import SignUp from './view/auth/SignUp';

const App = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState()
  
  const handleLogout = () => {
    setUser();
    // setUsername("");
    // setPassword("");
    localStorage.clear();
  };

  const handleLogin = async (userDetails) => {
    // set the state of the user
    setUser(userDetails)
    // store the user in localStorage
    localStorage.setItem('username', JSON.stringify(userDetails))
    console.log(userDetails)
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    console.log(typeof(loggedInUser));
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <div>
      <h1>Open My Mind</h1>
      <Router>
        <Switch>
          <Route exact path = "/" render={() => <Home handleLogout = {handleLogout} user = {user}/> }/>
          <Route exact path = "/auth/login" render={() => <Login handleLogin = {handleLogin}/>}/>
          <Route exact path = "/auth/signup" render={() => <SignUp/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
