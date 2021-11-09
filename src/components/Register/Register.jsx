import React, { useState } from "react";

const Register = (props) => {
  const [registerValues, setRegisterValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setRegisterValues((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createNewUser(registerValues);
  };

  return (
    <div>
      <span>Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your first name..."
          value={registerValues.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your last name..."
          value={registerValues.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          value={registerValues.email}
          onChange={handleChange}
        />
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          value={registerValues.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          value={registerValues.password}
          onChange={handleChange}
        />
        <button className="registerButton">Register</button>
      </form>
      <button>Login</button>
    </div>
  );
};

export default Register;
