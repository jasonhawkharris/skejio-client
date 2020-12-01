import React from 'react';
import { NavLink } from 'react-router-dom';

import './Venue.css';

const Venue = props => {
    const name = props.venue.name;
    const city = props.venue.city.name;
    const state = props.venue.state ? props.venue.state.stateCode : null;
    const country = props.venue.country.name;

    return (
        <NavLink
            to={{
                pathname: '/create-tourdate',
                venueProps: {
                    id: props.venue.id,
                    name: name,
                    city: city,
                    state: state,
                    country: country,
                    address: props.venue.address,
                    zip: props.venue.postalCode,
                    venueLink: props.venue.url,
                    locale: props.venue.locale,
                    timezone: props.venue.timezone,
                    tmLink: props.venue._links.self.href,
                },
            }}
            className="venue-link"
        >
            <div className="venue-result">
                {name} - {city}, {state && state + ','} {country}
            </div>
        </NavLink>

    )
}

export default Venue;