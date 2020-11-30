import React, { useState } from 'react';
import _ from 'lodash';
import { Button, Dropdown, Grid, Header } from 'semantic-ui-react';

import useVenues from '../../hooks/useVenues';

const VenueSearch = props => {
    const [isFetching, setIsFetching] = useState(false)
    const [query, setQuery] = useState('');
    const [venues, fetchVenues] = useVenues(query, true);
    const [value, setValue] = useState('');
    const [options, setOptions] = useState(value);

    // console.log('query', query);
    // console.log('venues', venues);
    console.log('current value', value);
    // console.log('options', options);



    const handleChange = e => {
        setValue(e.target.id);
        // setValue(e.target.attributes.id.nodeValue)
    };

    const handleSearchChange = e => {
        setQuery(e.target.value);
    };

    const formatVenues = () => {
        return venues.map(venue => {
            venue.innerHTML = venue.name
            return {
                id: venue.id,
                text: venue.name,
            }
        })
    }

    const fetchOptions = () => {
        setIsFetching(true);
        fetchVenues(query, true);

        setTimeout(() => {
            setOptions(formatVenues());
            setIsFetching(false);
        }, 2000)
    }

    return (
        <Grid>
            <Grid.Column width={8}>
                <Dropdown
                    fluid
                    selection
                    multiple={false}
                    search={true}
                    options={options}
                    value={value}
                    placeholder="Search venue by name, or city"
                    onChange={handleChange}
                    onSearchChange={handleSearchChange}
                    disabled={isFetching}
                    loading={isFetching}
                />
            </Grid.Column>
            <Grid.Column>
                <Button onClick={fetchOptions}>
                    Search
                </Button>
            </Grid.Column>
        </Grid>
    )
}

export default VenueSearch;