import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./List.css";

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="container">
      <Typography variant="h4"> Discover New Places!</Typography>
      {isLoading ? (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className="formControl">
            <InputLabel id="type"> Type </InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="formControl">
            <InputLabel spacing={3} id="rating">
              {" "}
              Rating{" "}
            </InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className="list">
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
