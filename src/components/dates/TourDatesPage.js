import React from 'react';
import { useRecoilValue } from 'recoil';

import TourDates from './TourDates';
import useDates from '../../hooks/useDates';
import { userState } from '../../recoil/atoms';
import './Dates.css';


const TourDatesPage = props => {
    const user = useRecoilValue(userState);
    const [tourDates] = useDates(user._id);

    const handleAddBtnClick = event => {
        props.history.push('/new-tour-date');
    }

    return (
        <div className="all-tour-dates">
            <h1>My Tour Dates</h1>
            {tourDates ?
                <TourDates
                    data={tourDates}
                    props={props}
                /> :
                <p>You have no tour dates on your schedule</p>
            }
            <button className="ui blue submit button" onClick={handleAddBtnClick}>Add a Date</button>
        </div>
    )
}

export default TourDatesPage;