import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";

const Header = ({ onPlaceChanged, onLoad }) => {
 
  return (
    <AppBar position="static">
       <Toolbar className="toolbar">
       <Typography variant="h5" className="title">
        </Typography>
        <Box display="flex" >
          <Typography varient="h" className="title">
           
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
        </Toolbar>
    </AppBar>
  );
};

export default Header;
