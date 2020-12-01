import React from 'react';
import { NavLink } from 'react-router-dom';

import './Venue.css';

const Venue = props => {
    return (
        <NavLink
            to={{
                pathname: '/create-tourdate',
                venueProps: {
                    result: props,
                }
            }}
            className="venue-link"
        >
            <div className="venue-result">
                {props.name} - {props.city}, {props.result.state && props.result.state.stateCode} {props.country}
            </div>
        </NavLink>

    )
}

export default Venue;