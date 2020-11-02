import React, { useState, useEffect } from 'react';
import { searchVenues } from '../../utils/helpers';

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
                return <div class="ui card">
                    <div class="image">
                        <img src="/images/avatar2/large/kristy.png">
  </div>
                        <div class="content">
                            <a class="header">Kristy</a>
                            <div class="meta">
                                <span class="date">Joined in 2013</span>
                            </div>
                            <div class="description">
                                Kristy is an art director living in New York.
    </div>
                        </div>
                        <div class="extra content">
                            <a>
                                <i class="user icon"></i>
      22 Friends
    </a>
                        </div>
                    </div>

                    {/* <h1 onClick={() => console.log(result.id)}>{result.name}</h1> */}
            })}
        </div>
    )
            }

export default VenueDropdown;