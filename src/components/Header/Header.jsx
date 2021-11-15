import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

const Header = ({ onPlaceChanged, onLoad }) => {
 
  return (
    <AppBar position="static">
        <Box display="flex" className="title">
          <Typography varient="h6" className="title">
            Discover New Places!
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Explore..."
                classes={{
                  root: "inputRoot",
                  input:"inputInput",
                }}
              />
            </div>
          </Autocomplete>
        </Box>
    </AppBar>
  );
};

export default Header;
