import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import Loginimg from "../images/login.jpg";
import "./Login.css";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loggedInUser = {
      username: username,
      password: password,
    };
    props.loginUser(loggedInUser);
  };

  return (
    <div className="login">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Loginimg})` }}
      ></div>
      <div className="rightSide">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1> Login </h1>
          <label>Username</label>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your username..."
              onChange={handleUsername}
            />
          </Form.Group>
          <label>Password</label>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter your password..."
              onChange={handlePassword}
            />
          </Form.Group>
          <Button type="submit" variant="contained" class="btn btn-success">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
