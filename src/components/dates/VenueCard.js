import React from 'react';
import { NavLink } from 'react-router-dom';


const VenueCard = props => {
    return (
        <NavLink to={{
            pathname: '/new-tour-date/filled',
            venueCardProps: {
                venue: props.venueId,
                name: props.name,
                city: props.city,
                country: props.country,
                id: props.id,
            }
        }}>
            <div id={props.id} className="ui segment">
                <div >
                    <p>{props.name}, {props.city}, {props.country}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default VenueCard;