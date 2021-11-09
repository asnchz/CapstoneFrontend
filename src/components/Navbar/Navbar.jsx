import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="nav">
      <div>Vuela</div>
      <div>
        <ul>
          <Link to="/"> Home</Link>
          <Link to="/login">
            <button onClick={props.loginUser}>Login</button>
          </Link>
          <Link to="/register">
            <button onClick={props.createNewUser}>Sign Up</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
