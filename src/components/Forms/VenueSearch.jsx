import React, { useEffect, useState } from 'react';
import VenueModel from '../../models/VenueModel';
import Venue from './Venue';

const VenueSearch = props => {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);

    const generateVenues = () => {
        return results.map(result => {
            return (
                <Venue
                    name={result.name}
                    city={result.city}
                    country={result.country.countryCode}
                    id={result.id}
                    key={result.id}
                    result={result}
                />
            );
        })
    }

    useEffect(function () {
        if (inputValue) {
            VenueModel.searchVenues(inputValue).then(response => {
                if (response.data._embedded) {
                    setResults(response.data._embedded.venues);
                }
            });
        }
    }, [inputValue]);

    return (
        <div>
            <h1>Search For A Venue</h1>
            <div className="ui fluid huge icon input">
                <input
                    type="text"
                    placeholder="Search for a venue..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <i class="search icon"></i>
            </div>
            <div className="ui raised segment">
                {results &&
                    generateVenues()
                }
            </div>
        </div>
    )
}

export default VenueSearch;