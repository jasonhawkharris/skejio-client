import React from 'react';

import './Dates.css';

const TourDateCard = props => {
    const { date } = props.tourDate;

    // const getDateOnly = dateToFormat => {
    //     let oldDate = dateToFormat.split('T')[0].split('-');
    //     return `${oldDate[1]}-${oldDate[2]}-${oldDate[0]}`
    // }

    return (
        <div className="ui segment">
            <p>{date.split('T')[0]}</p>
        </div>
    )
}

export default TourDateCard;