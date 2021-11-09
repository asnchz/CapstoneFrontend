import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [loginValues, setLoginValues] = useState({
    username: "",
    Password: "",
  });

  const handleChange = (event) => {
    setLoginValues((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(loginValues);
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          value={loginValues.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          value={loginValues.password}
          onChange={handleChange}
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};
export default Login;
