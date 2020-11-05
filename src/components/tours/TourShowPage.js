import React from 'react';
import { NavLink } from 'react-router-dom';

import TourDateCard from '../dates/TourDateCard';
import './Tours.css';


// only do this after you manage to link the Tour here.
const TourShowPage = props => {
    console.log(props.location.tourDates);
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

    return (
        <div className="tourDates-list">
            {generateTourDates()}
        </div>
    )
}

export default TourShowPage;