import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { Route, Switch, Redirect } from 'react-router-dom';
import {Grid} from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (err) {}
  }

  registerNewUser = async (registerUser) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/auth/register/`,
        registerUser
      )
    } catch (err) {
      console.log("Error registering new user. Please try again", err);
    }
  };

  loginUser = async (loggedInUser) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        loggedInUser
      )
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log("Username and/or Password invalid. Please try again", err);
    }
  };

  logOutUser = async () => {
    localStorage.removeItem("token");
  };

  render () {
    var user = this.state.user;
    return(
      <Grid>
        <Navbar user={user} logOutUser={this.logOutUser}/>
        <div className="App">
        <Switch>
          <Route path="/Home" exact render={props => {
          if(!user){
            return <Redirect to="/Login" />
          }
        else{
          return <Home {...props} user={user} />
        }}
      }/>
          <Route path="/" exact component={Home}/>
          <Route path = "/Register" render={props => <Register {...props} registerNewUser={this.registerNewUser}/>}/>
          <Route path="/Login" render={props => <Login {...props} loginUser={this.loginUser}/>}/>
          </Switch>
      </div> 
      </Grid> 
    );
  }
}

export default App;
