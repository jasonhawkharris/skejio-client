/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';


import TourDateCard from './TourDateCard';

import './Dates.css';

const TourDates = props => {
    const generateTourDateCards = tourDates => {
        try {
            return tourDates.map(tourDate => {
                return <TourDateCard key={tourDate._id} tourDate={tourDate} />
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