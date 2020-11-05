/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NavLink } from 'react-router-dom';

import TourDateCard from './TourDateCard';
import TourDateModel from '../../models/TourDateModel';
import './Dates.css';

const TourDates = props => {
    const handleClick = event => {
        TourDateModel.delete(event.target.id);
    }

    const generateTourDateCards = tourDates => {
        try {
            return tourDates.map(tourDate => {
                return (
                    <div className="tourDateCard">
                        <NavLink to={`/tour-date/${tourDate._id}`}>
                            <TourDateCard key={tourDate._id} tourDate={tourDate} />
                        </NavLink >
                        {/* <button id={tourDate._id} className="ui mini button" onClick={handleClick}>Delete</button> */}
                    </div>

                )
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="tourDates-list">
            {generateTourDateCards(props.data)}
        </div>
    )
}

export default TourDates;