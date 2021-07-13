/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import TourModel from '../models/TourModel';

const useTours = (tourId, show = false) => {
    const [tours, setTours] = useState([]);

    const fetchTours = (id, show) => {
        if (show) {
            TourModel.show(id).then(response => {
                if (response.data.message) return setTours([]);
                setTours(response.data.tour);
            });
        } else {
            TourModel.all(id).then(response => {
                if (response.data.message) return setTours([]);
                setTours(response.data.tours);
            });
        }
    }

    useEffect(
        function () {
            fetchTours(tourId, show)
        },
        [tourId]
    );

    return [tours, fetchTours];
}

export default useTours;