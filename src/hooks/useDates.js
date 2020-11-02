import { useState, useEffect } from 'react';
import TourDateModel from '../models/TourDateModel';

const useTourDates = tourDateId => {
    const [tourDates, setTourDates] = useState([]);

    const fetchTourDates = id => {
        if (id) {
            TourDateModel.show(id).then(response => {
                // THIS MAY BE A PROBLEM. try different forms of date
                setTourDates(response.data.tourDate)
                console.log(response);
            });
        } else {
            TourDateModel.all().then(response => {
                setTourDates(response.data.tourDates);
                console.log(response);
            });
        }
    }

    useEffect(
        function () {
            fetchTourDates(tourDateId)
        },
        [tourDateId]
    );

    return [tourDates, fetchTourDates];
}

export default useTourDates;