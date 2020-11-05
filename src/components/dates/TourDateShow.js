import React, { useEffect, useState } from 'react';

import useTourDates from '../../hooks/useDates';
import TourDateInfo from './TourDateInfo';
import { findVenueById } from '../../utils/helpers';

const TourDateShow = props => {
    const [tourDate, fetchTourDates] = useTourDates(props.match.params.id, true);
    const [venue, setVenue] = useState(null);

    useEffect(function () {
        if (tourDate) {
            findVenueById(tourDate.venue)
                .then(response => {
                    setVenue(response.data);
                }).catch(err => console.log(err));
        } else {
            console.log('there is no tourdate');
        }
    }, [tourDate])

    return venue ? <TourDateInfo
        venue={venue}
        tourDate={tourDate}
        fetch={() => fetchTourDates(props.match.params.id, true)}
    /> :
        <h1>loading...</h1>;
}

export default TourDateShow;