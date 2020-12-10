import React, { useEffect, useState } from 'react';
import { Button, Loader } from 'semantic-ui-react';

import useTourdates from '../../hooks/useTourdates';
import TourdateRow from './TourdateRow';


const TourdateIndex = props => {
    const [tourdates, fetchTourdates] = useTourdates(null);
    const [loading, setLoading] = useState(true);

    const generateTourdates = () => {
        return tourdates.map(tourdate => {
            return (
                <TourdateRow
                    fetch={() => fetchTourdates()}
                    indexProps={props}
                    key={tourdate._id}
                    info={tourdate}
                />
            )
        })
    }

    useEffect(function () {
        if (!tourdates) {
            fetchTourdates();
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>All Tourdates</h1>
            {loading ? (
                <Loader />
            ) : (
                    <>

                        <div>
                            {tourdates ? (
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
                )
            }
        </div >

    )
}

export default TourdateIndex;