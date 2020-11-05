import React, { useState } from 'react';

import VenueDropdown from './VenueDropdown';
import TourDropdown from './TourDropdown';
import TourDateModel from '../../models/TourDateModel';

const NewTourDate = props => {
    const [tour, setTour] = useState('');
    const [showDate, setShowDate] = useState('');
    const [venue, setVenue] = useState('');

    const tourDateData = { tour, showDate, venue };


    const handleSubmittedTourDate = event => {
        event.preventDefault();
        console.log('tourDate:', tourDateData);
        // TourDateModel.create(tourDate);
    }

    return (
        <div>
            <h1>Create a new tour date</h1>
            <form className="ui form"
                onSubmit={handleSubmittedTourDate}
            >
                <TourDropdown setTour={setTour} />
                <input
                    type="date"
                    name="date"
                    onChange={e => setShowDate(e.target.value)}
                />
                <VenueDropdown setVenue={setVenue} />
                <input
                    type="submit"
                    value="Create Tour Date"
                    className="ui button" />
            </form>
        </div>
    )
}

export default NewTourDate;