import Logo from "../images/Logo.png";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

const Navbar = (props) => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="nav-item" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <Link font-weight="bolder" to="/">
          VUELA
        </Link>
        <div className="hiddenLinks">
          <Link to="/destination"> Destinations </Link>
          <Link to="/itinerary"> My Itinerary </Link>
          <Link to="/register"> Register </Link>
        </div>
      </div>
      <div className="rnav-item">
        <Link to="/destination"> Destinations </Link>
        <Link to="/itinerary"> My Itinerary </Link>
        <Link to="/register"> Register </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
