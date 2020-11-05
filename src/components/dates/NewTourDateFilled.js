import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from '../../recoil/atoms';
import TourDropdown from './TourDropdown';
import TourDateModel from '../../models/TourDateModel';

const NewTourDateFilled = props => {
    const navProps = props.location.venueCardProps;

    const user = useRecoilValue(userState);
    const [tour, setTour] = useState('');
    const [date, setShowDate] = useState('');
    const [artist] = useState(user._id);
    const [venue] = useState(navProps.id);
    const tourDateData = { tour, date, venue, artist };

    const handleSubmittedTourDate = event => {
        event.preventDefault();
        TourDateModel.create(tourDateData);
        props.history.push('/tour-dates');
    }

    return (
        <div>
            <form className="ui form" onSubmit={handleSubmittedTourDate}>
                <TourDropdown setTour={setTour} />
                <input
                    type="date"
                    name="date"
                    onChange={e => setShowDate(e.target.value)}
                />
                <input type="hidden" name="artist" value={artist} />
                <input type="hidden" name="venue" value={venue} />
                <input className="ui blue submit button" type="submit" value="Add Tour Date" />
            </form>
        </div>
    )
}

export default NewTourDateFilled;