import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import ItineraryForm from "./components/ItineraryForm/ItineraryForm";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { getPlacesData, getWeatherData } from "./api/APIs";
import { CssBaseline, Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [user, setUser] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserInfo();
    }
  }, []);

  const registerNewUser = async (registerUser) => {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/auth/register/`,
        registerUser
      );
      window.location = "/login";
    } catch (err) {}
  };

  const loginUser = async (loggedInUser) => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        loggedInUser
      );
      localStorage.setItem("token", response.data.token);
      getUserInfo();
      window.location = "/home";
    } catch (error) {
      console.log("Username and/or Password invalid. Please try again", error);
    }
  };

  const getUserInfo = () => {
    try {
      const userInfo = jwtDecode(localStorage.getItem("token"));
      setUser(userInfo);
    } catch (error) {}
  };

  const logoutUser = async () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      window.location = "/home";
    } catch (error) {
      console.log("Error", error);
    }
  };

  // const getAllLocations = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://127.0.0.1:8000/api/locations/all/"
  //     );
  //     this.setState({
  //       location: response.data,
  //     });
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };
  const getAllItineraries = async () => {
    try {
      await axios.get("http://127.0.0.1:8000/api/itinerary/all/");
    } catch (error) {
      console.log("Failed to display itineraries. Please try again.", error);
    }
  };

  const createItinerary = async (newItinerary) => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/itinerary/userlocation/",
        newItinerary
      );
      getAllItineraries();
    } catch (error) {
      console.log("Failed to create itinerary. Please try again.", error);
    }
  };

  // const viewItinerary = async (viewItin) => {
  //   try {
  //     const response = await axios.get(
  //       "http://127.0.0.1:8000/api/itinerary/",
  //       viewItin,
  //       {
  //         headers: {
  //           Authorization: "Bearer" + this.state.jwtToken,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log("Failed to retrieve itineraries. Please try again.", error);
  //   }
  // };

  // const deleteItinerary = async (deleteItin) => {
  //   try {
  //     const response = await axios.get(
  //       "http://127.0.0.1:8000/api/itinerary/delete",
  //       deleteItin,
  //       {
  //         headers: {
  //           Authorization: "Bearer" + this.state.jwtToken,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log("Failed to delete itinerary. Please try again.", error);
  //   }
  // };

  // const updateItinerary = async (updateItin) => {
  //   try {
  //     const response = await axios.get(
  //       "http://127.0.0.1:8000/api/itinerary/delete",
  //       updateItin,
  //       {
  //         headers: {
  //           Authorization: "Bearer" + this.state.jwtToken,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log("Failed to update itinerary. Please try again.", error);
  //   }
  // }

  return (
    <>
      <Grid>
        <Navbar logoutUser={logoutUser} />
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} user={user} />}
            />
            <Route
              path="/login"
              render={(props) => <Login {...props} loginUser={loginUser} />}
            />
            <Route
              path="/register"
              render={(props) => (
                <Register {...props} registerNewUser={registerNewUser} />
              )}
            />
            <Route
              path="/itinerary"
              render={(props) => (
                <ItineraryForm {...props} createItinerary={createItinerary} />
              )}
            />
            {
              <>
                <CssBaseline />
                <Header
                  path="/destination"
                  onPlaceChanged={onPlaceChanged}
                  onLoad={onLoad}
                />
                <Grid container spacing={3} style={{ width: "100%" }}>
                  <Grid item xs={12} md={4}>
                    <List
                      isLoading={isLoading}
                      childClicked={childClicked}
                      places={filteredPlaces.length ? filteredPlaces : places}
                      type={type}
                      setType={setType}
                      rating={rating}
                      setRating={setRating}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={8}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Map
                      setChildClicked={setChildClicked}
                      setBounds={setBounds}
                      setCoords={setCoords}
                      coords={coords}
                      places={filteredPlaces.length ? filteredPlaces : places}
                      weatherData={weatherData}
                    />
                  </Grid>
                </Grid>
              </>
            }
          </Switch>
        </div>
      </Grid>
    </>
  );
};

export default App;
