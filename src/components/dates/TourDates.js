/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { NavLink } from 'react-router-dom';

import TourDateCard from './TourDateCard';
import './Dates.css';


const TourDates = props => {
    const generateTourDateCards = tourDates => {
        try {
            return tourDates.map(tourDate => {
                return (
                    <NavLink to={`/tour-date/${tourDate._id}`}>
                        <TourDateCard key={tourDate._id} tourDate={tourDate} />
                    </NavLink >
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