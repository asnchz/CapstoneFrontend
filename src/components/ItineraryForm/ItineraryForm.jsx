import React from 'react'
import "./ItineraryForm.css"
import ItinPic from "../images/itineraryform.jpg"

function ItineraryForm() {
    return (
        <div className="itinerary">
            <div className="leftSide"
                style={{backgroundImage: `url(${ItinPic})`}}
            ></div>
            <div className="rightSide">
                <h1>My Itinerary</h1>
                <form id="itinerary-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="destination">Destination</label>
                    <input name="destination" placeholder="Where'd you go..." type="text" />
                    <label htmlFor="details">Details</label>
                    <textarea rows="10" placeholder="What'd you do..." name="details" required></textarea>
                    <button type="submit">Share Adventure!</button>
                </form>
            </div>
        </div>
    )
}

export default ItineraryForm
