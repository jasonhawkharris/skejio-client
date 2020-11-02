/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import TourCard from './TourCard';

import './Tours.css';

const Tours = props => {
    const generateTourCards = tours => {
        return tours.map(tour => {
            return <TourCard key={tour._id} tour={tour} />
        });
    }

    return (
        <div className="tour-list">
            {generateTourCards(props.data)}
        </div>
    );
}

export default Tours;