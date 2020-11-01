import React from 'react';
import findVenueById from '../../utils/helpers';

import './Dates.css';

const TourDateCard = props => {
    const { date, venue } = props.tourDate;

    return (
        <div>
            <p>{date} : {venue}</p>
        </div>
    )
}

export default TourDateCard;