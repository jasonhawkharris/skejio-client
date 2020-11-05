import React from 'react';

import TourDates from './TourDates';
import { useRecoilValue } from 'recoil';

import useDates from '../../hooks/useDates';
import { userState } from '../../recoil/atoms';

const TourDatesPage = props => {
    const user = useRecoilValue(userState);
    const [tourDates] = useDates(user._id);

    const handleAddBtnClick = event => {
        props.history.push('/new-tour-date');
    }

    return (
        <div className="all-tour-dates">
            <h1>My Tour Dates</h1>
            {tourDates.length ?
                <TourDates data={tourDates} /> :
                <p>No tour dates</p>
            }
            <button className="ui button" onClick={handleAddBtnClick}>Add a Date</button>
        </div>
    )
}

export default TourDatesPage;