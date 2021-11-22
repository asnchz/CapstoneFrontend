import React, { Component } from "react";
import "./ItineraryForm.css";
import ItinPic from "../images/itineraryform.jpg";

class ItineraryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      details: "",
      location: "",
      review: "",
    };
  }

  handleUserChange = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  handleDetailChange = (event) => {
    this.setState({
      details: event.target.value,
    });
  };

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleReviewChange = (event) => {
    this.setState({
      review: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const itinerary = {
      user: this.state.user,
      details: this.state.details,
      location: this.state.location,
      review: this.state.review,
    };
    this.props.createItinerary(itinerary);
  };
  render() {
    return (
      <div className="itinerary">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${ItinPic})` }}
        ></div>
        <div className="rightSide">
          <h1>My Itinerary</h1>
          <form onSubmit={this.handleSubmit} id="itinerary-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              placeholder="Enter full name..."
              type="text"
              onChange={this.handleUserChange}
              value={this.state.user}
            />
            <label htmlFor="destination">Destination</label>
            <input
              name="destination"
              placeholder="Where'd you go..."
              type="text"
              onChange={this.handleLocationChange}
              value={this.state.location}
            />
            <label htmlFor="details">Details</label>
            <textarea
              rows="10"
              placeholder="What'd you do..."
              name="details"
              onChange={this.handleDetailChange}
              value={this.state.details}
              required
            ></textarea>
            <button type="submit">Share Adventure!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ItineraryForm;
