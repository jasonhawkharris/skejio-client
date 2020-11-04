import { useState, useEffect } from 'react';

import TourModel from '../models/TourModel';

const useTours = userId => {
    const [tours, setTours] = useState([]);

    const fetchTours = (id, show = false) => {
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
            fetchTours(userId)
        },
        [userId]
    );

    return [tours, fetchTours];
}

export default useTours;