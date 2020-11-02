import React, { useState, useEffect } from 'react';
import { searchVenues } from '../../utils/helpers';

import VenueCard from './VenueCard';

const VenueDropdown = props => {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);

    useEffect(function () {
        if (inputValue) {
            searchVenues(inputValue).then(response => {
                if (response.data._embedded) {
                    setResults(response.data._embedded.venues);
                }
            });
        }
    }, [inputValue]);

    return (
        <div>
            <input
                type="text"
                placeholder="search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {results.map(result => {
                return <VenueCard
                    venueId={result.id}
                    name={result.name}
                    city={result.city.name}
                    country={result.country.countryCode}
                />
            })}
        </div>
    )
}

export default VenueDropdown;