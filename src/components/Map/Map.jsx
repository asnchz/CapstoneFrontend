import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import "./Map.css";

const Map = (
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData
) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCB4eAGyLcjaoKq9PUc83CJMSMhr0PPByg"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, i) => (
          <div
            className="mapContainer"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className="paper">
                <Typography
                  className="typography"
                  variant="subtitile2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className="pointer"
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coordinates.lat} lng={data.coordinates.lon}>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="weather"
              height="70px"
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
