import React, { useEffect, useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import VenueModel from '../../models/VenueModel';
import Venue from './Venue';

const VenueSearch = props => {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);

    const generateVenues = () => {
        return results.map(result => {
            return (
                <Venue
                    key={result.id}
                    venue={result}
                />
            );
        })
    }

    useEffect(function () {
        if (inputValue.length > 3) {
            const searchAPIDebounced = AwesomeDebouncePromise(function () {
                VenueModel.searchVenues(inputValue).then(response => {
                    if (response.data._embedded) {
                        setResults(response.data._embedded.venues);
                    }
                });
            }, 1300);

            searchAPIDebounced();
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
                <i className="search icon"></i>
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