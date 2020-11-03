import React from 'react';

import Threads from './Threads';

const TourDateInfo = props => {
    return (
        <div className="show-details">
            <h3>Show Details</h3>
            <ul>
                <li>Date: {props.tourDate.date}</li>
                <li>Fee: {props.tourDate.fee}</li>
                <li>Deposit: {props.tourDate.deposit}</li>
                <li>Deposit Received: {props.tourDate.depositReceived.toString()}</li>
                <li>Paid: {props.tourDate.paidInFull.toString()}</li>
                <li>Promoter: {props.tourDate.promoterName}</li>
                <li>Post Show Form Submitted: {props.tourDate.postShowFormSubmitted.toString()}</li>
            </ul>
            <h3>Venue Info</h3>
            <img src={props.venue.images[0].url} alt="venue"></img>
            <ul>
                <li>{props.venue.name}</li>
                <li>{props.venue.address.line1}</li>
                <li>{props.venue.city.name}, {props.venue.state.stateCode}</li>
                <li>{props.venue.country.name}</li>
            </ul>
            <div>
                <Threads />
            </div>
        </div>
    )
}

export default TourDateInfo;