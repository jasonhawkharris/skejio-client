import React from 'react';
import { NavLink } from 'react-router-dom';
import Humanize from 'humanize-plus';

import Threads from './Threads';
import TourDateModel from '../../models/TourDateModel';
import { formatDate, getYN } from '../../utils/helpers';
import './Dates.css';


const TourDateInfo = props => {
    const tourDateId = props.tourDate._id;
    const info = props.tourDate;

    const deleteTourDate = event => {
        TourDateModel.delete(tourDateId).then(response => {
            window.location.replace('/tour-dates');
        })
    }

    return (
        <div className="show-details">
            <h1 page>Show Details</h1>
            <div className="details">
                <p>
                    <strong>Date:</strong> {formatDate(info.date, true, true)}<br />
                    <strong>Fee:</strong> ${Humanize.formatNumber(info.fee, 2)}<br />
                    <strong>Deposit:</strong> ${Humanize.formatNumber(info.deposit, 2)}<br />
                    <strong>Deposit Received:</strong> {getYN(info.depositReceived)}<br />
                    <strong>Paid:</strong> {getYN(info.paidInFull)}<br />
                    <strong>Promoter:</strong> {info.promoterName}<br />
                    <strong>Post Show Form Submitted:</strong> {getYN(info.postShowFormSubmitted)}<br />
                </p>
                <NavLink to={{
                    pathname: `/update-tour-date/${props.tourDate._id}`,
                    infoProps: {
                        tourDate: props.tourDate,
                    }
                }} className="ui button">Edit</NavLink>
                <button
                    className="ui red delete button"
                    onClick={deleteTourDate}
                >
                    Delete this tour date
                </button>
            </div>

            <h3>Venue Info</h3>
            {props.venue.images &&
                <img
                    className="venue-img"
                    src={props.venue.images[0].url}
                    alt="venue"
                />
            }

            <p className="venue-info">
                {props.venue.name}<br />
                {props.venue.address.line1}<br />
                {props.venue.city.name},
                {props.venue.state.stateCode}<br />
                {props.venue.country.name}
            </p>

            <div className="planning">
                <div className="ui threaded comments">
                    <h3 className="ui dividing header">Threads</h3>
                    <Threads
                        threads={info.threads}
                        tourDate={info._id}
                        fetch={props.fetch}
                    />
                </div>
            </div>
        </div>
    )
}

export default TourDateInfo;