import React, { useEffect, useState } from 'react';
import TourModel from '../../models/TourModel';

const TourDropdown = props => {
    const [tours, setTours] = useState(null);

    useEffect(function () {
        fetchTours();
    }, []);

    const fetchTours = async () => {
        const data = await TourModel.all();
        console.log(data.data.tours);
        setTours(data.data.tours);
    }

    const optionList = tours ?
        tours.map(tour =>
            <option
                key={tour._id}
                value={tour._id}
            >
                Tour name will go here: {tour.name}
            </option >
        ) :
        '';

    return (
        <select onChange={e => props.setTour(e.target.value)}>
            {tours &&
                optionList}
        </select>
    )
}

export default TourDropdown;