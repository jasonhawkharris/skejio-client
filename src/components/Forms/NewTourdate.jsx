import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import TourdateModel from '../../models/TourdateModel';
import { userState } from '../../recoil/atoms';

const NewTourDate = props => {
    const info = props.location.venueProps;
    const user = useRecoilValue(userState);
    const venueId = info.id;
    const artist = user._id;
    const city = info.city;
    const state = info.state;
    const country = info.country;
    const timezone = info.timezone;
    const _tmLink = info.tmLink;
    const venueLink = info.venueLink;
    const address = info.address.line1;
    const address2 = info.address.line2 ? info.address.line2 : null;
    const zip = info.zip;
    const [date, setDate] = useState(null);
    const [tour, setTour] = useState(null);
    const data = { venueId, artist, date, tour, city, state, country, timezone, _tmLink, venueLink, address, address2, zip };

    const generateTours = () => {
        return user.tours.map(tour => {
            return (
                <option value={tour._id}>{tour.name}</option>
            )
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        TourdateModel.create(data).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })

        props.history.push('/alltourdates');
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