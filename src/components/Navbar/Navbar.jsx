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
        {props.user &&<Link to="/destination"> Destinations </Link>}
          {props.user &&<Link to="/reviews"> Reviews </Link>}
          {!props.user &&<Link to="/register"> Register </Link>}
          {props.user &&<Link to="/login">Logout</Link>}
        </div>
      </div>
      <div className="rnav-item">
      {props.user &&<Link to="/destination"> Destinations </Link>}
      {props.user &&<Link to="/reviews"> Reviews </Link>}
      {!props.user &&<Link to="/register"> Register </Link>}
        {props.user &&<Link to="/login">Logout</Link>}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
