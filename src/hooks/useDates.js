import { useState, useEffect } from 'react';
import TourDateModel from '../models/TourDateModel';

const useTourDates = tourDateId => {
    const [tourDates, setTourDates] = useState([]);

    const fetchTourDates = (id) => {
        if (id) {
            TourDateModel.show(id).then(response => {
                setTourDates(response.data.tourDate)
            });
        } else {
            TourDateModel.all().then(response => {
                setTourDates(response.data.tourDates);
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