import React from 'react';
import { NavLink } from 'react-router-dom';

import TourDateCard from '../dates/TourDateCard';
import './Tours.css';


// only do this after you manage to link the Tour here.
const TourShowPage = props => {
    const generateTourDates = () => {
        try {
            return props.location.tourDates.map(tourDate => {
                return (
                    <NavLink to={`/tour-date/${tourDate._id}`}>
                        <TourDateCard
                            key={tourDate._id}
                            tourDate={tourDate}
                        />
                    </NavLink >
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    console.log(props);
    return (
        <div>
            <h1>Tour Dates for {props.location.tourName}</h1>
            <div className="tourDates-list">
                {generateTourDates()}
            </div>
        </div>

    )
}

export default TourShowPage;