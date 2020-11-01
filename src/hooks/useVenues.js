import { useState, useEffect } from 'react';
import VenueModel from '../models/VenueModel';

const useVenues = venueId => {
    const [venues, setVenues] = useState([]);

    const fetchVenues = (id) => {
        if (id) {
            VenueModel.show(id).then(data => {
                setVenues(data.tour);
            });
        } else {
            VenueModel.all().then(data => {
                setVenues(data.tour);
            });
        }
    }

    useEffect(
        function () {
            fetchVenues(venueId)
        },
        [venueId]
    );

    return [venues, fetchVenues];
}

export default useVenues;