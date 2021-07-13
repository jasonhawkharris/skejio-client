import React from 'react';

import './Tours.css';

const TourCard = props => {
    const { name } = props.tour;

    return (
        <div className="ui segment">
            <p>{name}</p>
        </div>
    );
}

export default TourCard;