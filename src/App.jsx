import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Trip from "./components/Trip/Trip";
import { Route, Switch, Redirect } from 'react-router-dom';
import {Grid} from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      location:"",
      jwtToken: null,
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

  getAllLocations = async () => {
    try {
        let response = await axios.get("http://127.0.0.1:8000/api/locations/all/");
        this.setState({
            location: response.data,
        });
    } catch (error) {
        console.log("Error", error);
    }
  };

  createItinerary = async (newItinerary) => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/itinerary/" ,newItinerary, {
      headers: {
        Authorization: "Bearer" + this.state.jwtToken},
      });
    }catch(error){
      console.log("Failed to create itinerary. Please try again.", error);
    }
  }

  viewItinerary = async (viewItin) => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/itinerary/", viewItin, {
        headers: {
          Authorization: "Bearer" + this.state.jwtToken},
      });
    }catch(error){
      console.log("Failed to retrieve itineraries. Please try again.", error);
    }
  }

  deleteItinerary = async (deleteItin) => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/itinerary/delete", deleteItin, {
        headers: {
          Authorization: "Bearer" + this.state.jwtToken},
      });
    }catch(error){
      console.log("Failed to delete itinerary. Please try again.", error);
    }
  }

  updateItinerary = async (updateItin) => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/itinerary/delete", updateItin, {
        headers: {
          Authorization: "Bearer" + this.state.jwtToken},
      });
    }catch(error){
      console.log("Failed to update itinerary. Please try again.", error);
    }
  }

  render () {
    var user = this.state.user;
    return(
      <Grid>
        <Navbar user={user} logOutUser={this.logOutUser}/>
        <div className="App">
        <Switch>
          <Route path="/home" exact render={props => {
          if(!user){
            return <Redirect to="/login" />
          }
        else{
          return <Home {...props} user={user} />
        }}
      }/>
          <Route path="/" exact component={Home}/>
          <Route path = "/register" render={props => <Register {...props} registerNewUser={this.registerNewUser}/>}/>
          <Route path="/login" render={props => <Login {...props} loginUser={this.loginUser}/>}/>
          <Route path="/location" render={props => <Trip {...props} getAllLocations={this.getAllLocations}/>}/>
          </Switch>
      </div> 
      </Grid> 
    );
  }
}

export default App;
