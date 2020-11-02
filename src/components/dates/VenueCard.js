import React from 'react';

const VenueCard = props => {
    return (
        <div className="ui segment">
            <div>
                <p>{props.name}, {props.city}, {props.country}</p>
            </div>
        </div>
    )
}

export default VenueCard;