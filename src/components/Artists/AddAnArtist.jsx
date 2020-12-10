import React, { useEffect, useState } from 'react';

import UserModel from '../../models/UserModel';
import ArtistResult from '../Artists/ArtistResult';

const AddAnArtist = props => {
    // form to add an artist to the manager/agents artist array.
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);

    const generateResults = () => {
        let index = -1;
        return results.map(result => {
            return (
                <ArtistResult
                    key={`result-${index}`}
                    artist={result}
                />
            )
        });
    }

    useEffect(
        function () {
            if (inputValue.length > 3) {
                UserModel.search(inputValue)
                    .then(response => {
                        setResults(response.users);
                    });
            }
        }, [inputValue]
    )

    return (
        <>
            <form className="ui form">
                <div className="field">
                    <input
                        type="text"
                        name="artist"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        placeholder="Search for the artist you represent"
                    />
                </div>
                <div className="results-block">
                    {results.length &&
                        generateResults()
                    }
                </div>
            </form>
        </>
    )
}

export default AddAnArtist;