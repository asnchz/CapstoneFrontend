import React, { useState } from "react";
import Logo from "../images/Sanchez Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

const Navbar = ({ user }) => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      {!user && (
        <React.Fragment>
          <div className="nav-item" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <h2>Vuela</h2>
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/register"> Register </Link>
              <Link to="/login"> Login </Link>
            </div>
          </div>
          <div className="rnav-item">
            <Link to="/"> Home </Link>
            <Link to="/register"> Register </Link>
            <Link to="/login"> Login </Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
          </div>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <div className="nav-item" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <h2>Vuela</h2>
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/itinerary"> Itinerary </Link>
              <Link to="/logout"> Logout </Link>
            </div>
          </div>
          <div className="rnav-item">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/itinerary"> Itinerary </Link>
            <Link to="/logout"> Logout </Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Navbar;
