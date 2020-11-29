/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import TourModel from '../models/TourModel';

const useTours = () => {
    const [tours, setTours] = useState(null);

    const fetchTours = (id) => {
        if (id) {
            TourModel.show(id).then(response => {
                // console.log('show', response);
                if (response.msg) setTours([]);
                setTours(response.foundTour);
            });
        } else {
            TourModel.all().then(response => {
                // console.log('all()', response);
                if (response.msg) return setTours([]);
                setTours(response.foundTours);
            });
        }
    }

    useEffect(
        function () {
            fetchTours()
        }, []
    );

    return [tours, fetchTours];
}

export default useTours;