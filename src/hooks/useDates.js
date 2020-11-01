import { useState, useEffect } from 'react';
import TourDateModel from '../models/TourDateModel';

const useTourDates = tourDateId => {
    const [tourDates, setTourDates] = useState([]);

    const fetchTourDates = id => {
        if (id) {
            TourDateModel.show(id).then(data => {
                // THIS MAY BE A PROBLEM. try different forms of date
                setTourDates(data.tourDate)
            });
        } else {
            TourDateModel.all().then(data => {
                setTourDates(data.tourDates);
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