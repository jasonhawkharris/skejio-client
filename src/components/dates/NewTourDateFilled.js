import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import TourDropdown from './TourDropdown';
import { userState } from '../../recoil/atoms';
import TourDateModel from '../../models/TourDateModel';



const NewTourDateFilled = props => {
    const navProps = props.location.venueCardProps;
    const user = useRecoilValue(userState);
    const [tour, setTour] = useState('');
    const [date, setShowDate] = useState('');
    const [fee, setFee] = useState('');
    const [artist] = useState(user._id);
    const [venue] = useState(navProps.id);
    const tourDateData = { tour, date, venue, artist, fee };


    const handleSubmittedTourDate = event => {
        event.preventDefault();
        TourDateModel.create(tourDateData);
        props.history.push('/tour-dates');
    }


    return (
        <div className="other-details">
            <h1>Other Details</h1>
            <form className="ui form" onSubmit={handleSubmittedTourDate}>
                <TourDropdown setTour={setTour} />
                <div className="ui fluid big input">
                    <input
                        type="date"
                        name="date"
                        onChange={e => setShowDate(e.target.value)}
                    />
                </div>
                <div className="ui fluid big input">
                    <input
                        type="text"
                        name="fee"
                        onChange={e => setFee(e.target.value)}
                        placeholder="fee to be paid"
                    />
                </div>
                <input type="hidden" name="artist" value={artist} />
                <input type="hidden" name="venue" value={venue} />
                <input className="ui blue submit button" type="submit" value="Add Tour Date" />
            </form>
        </div>
    )
}

export default NewTourDateFilled;