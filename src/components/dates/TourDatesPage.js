import React from 'react';

import TourDates from './TourDates';
import useDates from '../../hooks/useDates';

const TourDatesPage = () => {
    const [tourDates, fetchTourDates] = useDates();

    return (
        <div className="all-tour-dates">
            <h1>My Tour Dates</h1>
            <button className="ui button" onClick={fetchTourDates}>Refresh</button>
            {tourDates.length ?
                <TourDates data={tourDates} /> :
                <p>No tour dates</p>
            }
        </div>
    )
}

export default TourDatesPage;