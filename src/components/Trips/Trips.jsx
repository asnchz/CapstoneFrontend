import React from "react";
import { TripList } from "./TripList";
import TripLocation from "./TripLocation";
import "./Trips.css"

function Trips() {
  return (
    <div className="trip">
      <h1 className="tripTitle">Past Trips!</h1>
      <div className="tripList">
        {TripList.map((tripLocation, key) => {
          return (
            <TripLocation
              key={key}
              image={tripLocation.image}
              name={tripLocation.name}
              details={tripLocation.details}
              rating={tripLocation.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Trips;