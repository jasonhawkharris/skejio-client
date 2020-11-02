import React, { useEffect, useState } from 'react';
import TourDateModel from '../../models/TourDateModel';

const TourDatesMenu = props => {
    const [tourDates, setTourDates] = useState(null);

    useEffect(function () {
        fetchTourDates();
    }, [tourDates]);


    const fetchTourDates = async () => {
        const data = await TourDateModel.all();
        setTourDates(data.data.tourDates);
    }


    const optionList = tourDates ?
        tourDates.map(tourDate =>
            <option
                key={tourDate._id}
                value={tourDate._id}
            >
                Venue Will Go here: {tourDate.venue}
            </option>) :
        '';

    return (
        <select onChange={(e) => props.setTourDate(e.target.value)}>
            {tourDates &&
                optionList}
        </select>
    )
}

export default TourDatesMenu;

