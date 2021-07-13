import React, { useState, useEffect } from 'react';

import VenueCard from './VenueCard';
import { searchVenues } from '../../utils/helpers';

const VenueDropdown = props => {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);

    const generateVenues = results => {
        return results.map(result => {
            return (
                <VenueCard
                    venueId={result.id}
                    name={result.name}
                    city={result.city.name}
                    country={result.country.countryCode}
                    id={result.id}
                />
            );
        });
    }

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
            <div className="ui fluid huge icon input">
                <input
                    type="text"
                    placeholder="Search for a venue..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <i class="search icon"></i>
            </div>
            {results &&
                generateVenues(results)
            }
        </div>
    )
}

export default VenueDropdown;