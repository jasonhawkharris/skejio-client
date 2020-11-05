import React from 'react';
import { useRecoilValue } from 'recoil';

import useTours from '../../hooks/useTours';
import { userState } from '../../recoil/atoms';

const TourDropdown = props => {
    const user = useRecoilValue(userState);
    const [tours] = useTours(user._id);

    const optionList = tours ?
        tours.map(tour =>
            <option
                key={tour}
                value={tour._id}
            >
                {tour.name}
            </option >
        ) :
        '';

    return (
        <select onChange={e => props.setTour(e.target.value)}>
            <option selected>Choose a tour</option>
            {tours ?
                optionList :
                <option>Create a tour before proceeding.</option>}
        </select>
    )
}

export default TourDropdown;