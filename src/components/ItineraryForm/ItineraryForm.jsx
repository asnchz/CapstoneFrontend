import React, { Component } from "react";
import "./ItineraryForm.css";
import ItinPic from "../images/itineraryform.jpg";

class ItineraryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      details: "",
      location: "",
      review: "",
    };
  }

  handleUserChange = (event) => {
    this.setState({
        user_id: event.target.value,
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
      user_id: this.state.user_id,
      details: this.state.details,
      location: this.state.location,
      review: parseInt(this.state.review),
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
            <label htmlFor="name">Username</label>
            <input
              name="name"
              placeholder="Enter your username..."
              type="text"
              onChange={this.handleUserChange}
              value={this.state.user_id}
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
            <label htmlFor="review">Rating</label>
            <input
              name="review"
              placeholder="..."
              type="number"
              onChange={this.handleReviewChange}
              value={this.state.review}
            />
            <button type="submit">Share Adventure!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ItineraryForm;
