import React from 'react';

import VenueDropdown from './VenueDropdown';

const NewTourDate = props => {
    return (
        <div className="new-tour-date">
            <h1>Create a new tour date</h1>
            <VenueDropdown />
        </div>
    )
}

export default NewTourDate;