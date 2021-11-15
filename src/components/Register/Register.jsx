import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";

function Register(props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    console.log("firstName", firstName);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
    console.log("lastName", lastName);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log("email", email);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log("password", password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registerUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,
    };
    props.registerNewUser(registerUser);
  };

  return (
    <div align="center" className="register">
      <h1>Register</h1>
      <form align="center" className="registerForm" onSubmit={handleSubmit}>
        <label>First Name</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your first name..."
            onChange={handleFirstName}
            // value={registerValues.firstName}
          />
        </Form.Group>
        <label>Last Name</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your last name..."
            // value={registerValues.lastName}
            onChange={handleLastName}
          />
        </Form.Group>
        <label>Email</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your email..."
            // value={registerValues.email}
            onChange={handleEmail}
          />
        </Form.Group>
        <label>Username</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your username..."
            // value={registerValues.username}
            onChange={handleUsername}
          />
        </Form.Group>
        <label>Password</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Enter your password..."
            // value={registerValues.password}
            onChange={handlePassword}
          />
        </Form.Group>
        <Button type="submit" variant="contained" class="btn btn-success">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
