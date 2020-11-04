import React, { useEffect } from 'react';

import TourDates from './TourDates';
import { useRecoilValue } from 'recoil';

import useDates from '../../hooks/useDates';
import { userState } from '../../recoil/atoms';

const TourDatesPage = () => {
    const user = useRecoilValue(userState);
    const [tourDates, fetchTourDates] = useDates(user._id);

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