import React from 'react';

const VenueCard = props => {
    const handleClick = event => {
        console.log(props.id);
    }

    return (
        <div id={props.id} onClick={handleClick} className="ui segment">
            <div >
                <p>{props.name}, {props.city}, {props.country}</p>
            </div>
        </div >
    )
}

export default VenueCard;