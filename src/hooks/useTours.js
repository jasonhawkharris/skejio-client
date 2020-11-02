import { useState, useEffect } from 'react';
import TourModel from '../models/TourModel';

const useTours = tourId => {
    const [tours, setTours] = useState([]);

    const fetchTours = id => {
        if (id) {
            TourModel.show(id).then(response => {
                setTours(response.data.tour);
            });
        } else {
            TourModel.all().then(response => {
                setTours(response.data.tours);
            });
        }
    }

    useEffect(
        function () {
            fetchTours(tourId)
        },
        [tourId]
    );

    return [tours, fetchTours];
}

export default useTours;