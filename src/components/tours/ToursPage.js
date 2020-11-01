import React from 'react';

import Tours from './Tours';
import useTours from '../../hooks/useTours';

const ToursPage = () => {
    const [tours, fetchTours] = useTours();

    return (
        <div className="all-tours">
            <h1>My Tours</h1>
            <button className="ui button" onClick={fetchTours}>Refresh</button>
            {tours.length ?
                <Tours data={tours} /> :
                <p>No tours scheduled.</p>
            }
        </div>
    )
}

export default ToursPage;