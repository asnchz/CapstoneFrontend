import React from "react";

function TripLocation({ image, name, details, rating }) {
  return (
    <div className="tripLocation">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {details} </p>
      <p> Rating:{rating} </p>
    </div>
  );
}

export default TripLocation;