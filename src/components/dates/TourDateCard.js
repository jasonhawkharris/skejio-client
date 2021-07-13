import React from 'react';

import './Dates.css';


const TourDateCard = props => {
    const { date } = props.tourDate;

    return (
        <div className="ui segment">
            <p>{date.split('T')[0]}</p>
        </div>
    )
}

export default TourDateCard;