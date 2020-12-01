import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Button } from 'semantic-ui-react';

import useTourdates from '../../hooks/useTourdates';
import { userState } from '../../recoil/atoms';
import TourdateRow from './TourdateRow';


const TourdateIndex = props => {
    const user = useRecoilValue(userState);
    const [tourdates, fetchTourdates] = useTourdates(null);

    const generateTourdates = () => {
        return tourdates.map(tourdate => {
            return (
                <TourdateRow
                    fetch={() => fetchTourdates()}
                    key={tourdate._id}
                    info={tourdate}
                    user={user}
                    venue={tourdate.venue}
                />
            )
        })
    }

    return (
        <div>
            <h1>All Tourdates</h1>
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

export default TourdateIndex;