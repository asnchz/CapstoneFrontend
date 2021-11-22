import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Grid } from "@material-ui/core";

const Register = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleFirstChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registerUser = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password,
    };
    props.registerNewUser(registerUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Register </h1>
        <label>First Name</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your first name..."
            onChange={handleFirstChange}
          />
        </Form.Group>
        <label>Last Name</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your last name..."
            onChange={handleLastChange}
          />
        </Form.Group>
        <label>Email</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter your email..."
            onChange={handleEmailChange}
          />
        </Form.Group>
        <label>Username</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your username..."
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <label>Password</label>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Enter your password..."
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button type="submit" variant="contained" class="btn btn-success">
          Register
        </Button>
        <Grid style={{ marginLeft: "850px" }}></Grid>
      </form>
    </div>
  );
};
export default Register;
