import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

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

  registerNewUser = async (User) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/auth/register/`,
        User
      );
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log("Error registering new user. Please try again", err);
    }
  };

  loginUser = async (Login) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        Login
      );
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log("Username and/or Password invalid. Please try again", err);
    }
  };

  logOutUser = async () => {
    localStorage.removeItem("token");
  };

  render() {
    var user = this.state.user;
    return (
      <div>
        <Navbar user={user} logOutUser={this.logOutUser}/>
          <Routes>
          {/* <Route
              path="/profile"
              render={(props) => {
                if (!this.state.user) {
                  return (<Login {...props} loginUser={this.loginUser} />);}
                // } else {
                //   return( <ProductList {...props} productList={this.state.products} search={this.search} />);
                // }
              }}
            /> */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </div>
    );
  }
}

export default App;
