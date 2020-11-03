import React, { useEffect, useState } from 'react';

import useTourDates from '../../hooks/useDates';
import TourDateInfo from './TourDateInfo';
import { findVenueById } from '../../utils/helpers';

const TourDateShow = props => {
    const tourDate = useTourDates(props.match.params.id)[0];
    const [venue, setVenue] = useState(null);

    useEffect(function () {
        if (tourDate) {
            findVenueById(tourDate.venue)
                .then(response => {
                    setVenue(response.data);
                }).catch(err => console.log(err));
        }
    }, [tourDate])

    return venue ? <TourDateInfo venue={venue} tourDate={tourDate} /> : <h1>loading...</h1>;
}

export default TourDateShow;