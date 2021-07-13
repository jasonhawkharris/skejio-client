/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import TourDateModel from '../models/TourDateModel';

const useTourDates = (tourDateId, show = false) => {
    const [tourDates, setTourDates] = useState([]);

    const fetchTourDates = (id, show) => {
        if (show) {
            TourDateModel.show(id).then(response => {
                if (response.data.message) return setTourDates([]);
                setTourDates(response.data.tourDate)
            });
        } else {
            TourDateModel.all(id).then(response => {
                if (response.data.message) return setTourDates([]);
                setTourDates(response.data.tourDates);
            });
        }
    }

    useEffect(
        function () {
            fetchTourDates(tourDateId, show)
        },
        [tourDateId]
    );

    return [tourDates, fetchTourDates];
}

export default useTourDates;