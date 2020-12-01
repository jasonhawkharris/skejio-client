/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import VenueModel from '../models/VenueModel';

const useVenues = (term, search = false) => {
    const [venues, setVenues] = useState(null);

    const fetchVenues = () => {
        if (search) {
            VenueModel.searchVenues(term)
                .then(response => {
                    if (!response) return setVenues([]);
                    setVenues(response.data);
                })
        } else {
            VenueModel.findVenueById(term)
                .then(response => {
                    if (!response) return setVenues();
                    setVenues(response.data);
                });
        }
    }

    useEffect(function () {
        fetchVenues()
    }, [])

    return [venues, fetchVenues];
}

export default useVenues;