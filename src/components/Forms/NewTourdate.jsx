import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import TourdateModel from '../../models/TourdateModel';
import { userState } from '../../recoil/atoms';

const NewTourDate = props => {
    const user = useRecoilValue(userState);
    const venue = props.location.dateProps.id;
    const artist = user._id;
    const [date, setDate] = useState(null);
    const [tour, setTour] = useState(null);
    const data = { venue, artist, date, tour };

    const generateTours = () => {
        return user.tours.map(tour => {
            return (
                <option value={tour._id}>{tour.name}</option>
            )
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(data);
        // TourdateModel.create(data).then(response => {
        //     console.log(response);
        // }).catch(err => {
        //     console.log(err);
        // })

        // props.history.push('/alltourdates');
    }

    return (
        <>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input
                        type="date"
                        name="date"
                        onChange={e => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <select
                        name="tour"
                        onChange={e => setTour(e.target.value)}
                        required
                    >
                        <option value="">--Choose a tour--</option>
                        {user.tours && generateTours()}
                    </select>
                </div>
                <div className="field">
                    <input
                        type="submit"
                        className="ui pink button"
                        value="Add Date"
                    />
                </div>
            </form>
        </>
    )
}

export default NewTourDate;