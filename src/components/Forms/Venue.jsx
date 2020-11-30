import React from 'react';
import { Link } from 'react-router-dom';

import './Venue.css';

const Venue = props => {
    return (
        <Link
            to={{
                pathname: '/create-tourdate',
                dateProps: {
                    id: props.id,
                }
            }}
            className="venue-link"
        >
            <div className="venue-result">
                {props.name} - {props.city.name}, {props.result.state && props.result.state.stateCode} {props.country.countryCode}
            </div>
        </Link>

    )
}

export default Venue;