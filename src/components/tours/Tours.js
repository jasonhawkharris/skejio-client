import React from 'react';

import './Tours.css';

const TourCard = props => {
    const { name, complete } = props.tour;

    return (
        <div>
            <p>{name} : {complete}</p>
        </div>
    );
}

export default TourCard;