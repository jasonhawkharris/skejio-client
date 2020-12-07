/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

import useTours from '../../hooks/useTours';
import TourdateRow from '../Tourdates/TourdateRow';



const TourShow = props => {
    const [tour, fetchTour] = useTours(props.match.params.id);
    const [loading, setLoading] = useState(true);

    const generateTourdates = () => {
        return tour.tourdates.map(tourdate => {
            return (
                <TourdateRow
                    key={tourdate._id}
                    info={tourdate}
                />
            );
        });
    }

    useEffect(function () {
        if (!tour) {
            fetchTour(props.match.params.id)
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [])

    return (

        <div>
            {tour ? (
                <>
                    <h1>{tour.name}</h1>
                    <div>
                        {tour.tourdates ? (
                            <table className="ui selectable inverted table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Location</th>
                                        <th>Venue</th>
                                        <th>Load In</th>
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
                </>
            ) : (
                    <h1>loading...</h1>
                )}

        </div>
    )
}

export default TourShow;