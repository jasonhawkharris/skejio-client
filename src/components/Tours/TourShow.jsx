import React from 'react';
import { Button } from 'semantic-ui-react';

import TourdateRow from '../Tourdates/TourdateRow';



const TourShow = props => {
    const name = props.location.showProps.tour.name;
    const tourdates = props.location.showProps.tour.tourdates;

    const generateTourdates = () => {
        return tourdates.map(tourdate => {
            return (
                <TourdateRow
                    key={tourdate._id}
                    info={tourdate}
                />
            )
        })
    }

    return (
        <div>
            <h1>{name}</h1>
            <div>
                {tourdates ? (
                    <table className="ui selectable inverted table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Venue</th>
                                <th>Doors</th>
                                <th>Showtime</th>
                                <th>Fee</th>
                                <th>Paid?</th>
                                <th className="right aligned">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generateTourdates()}
                        </tbody>
                    </table>
                ) : (
                        <div className="ui inverted segment">No tour dates scheduled</div>
                    )}
                <Button
                    className="ui pink button"
                    onClick={() => props.history.push('/select-venue')}>
                    Add a Date
                </Button>
            </div>
        </div>
    )
}

export default TourShow;