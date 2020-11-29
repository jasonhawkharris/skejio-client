import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Icon } from 'semantic-ui-react';

import useTourdates from '../../hooks/useTourdates';
import { userState } from '../../recoil/atoms';
import TourdateRow from './TourdateRow';
import NewTourdateForm from '../Forms/NewTourdateForm';


const TourdateIndex = props => {
    const user = useRecoilValue(userState);
    const [tourdates, fetchTourdates] = useTourdates(null);
    const [createBtnClicked, setCreateBtnClicked] = useState(false);

    const generateTourdates = () => {
        return tourdates.map(tourdate => {
            return (
                <TourdateRow
                    fetch={() => fetchTourdates()}
                    key={tourdate._id}
                    info={tourdate}
                    user={user}
                />
            )
        })
    }

    const handleCreateBtnClicked = e => {
        if (createBtnClicked) {
            setCreateBtnClicked(false);
            console.log(createBtnClicked);
        } else {
            setCreateBtnClicked(true);
            console.log(createBtnClicked);
        }
    }



    return (
        <div>
            <h1>All Tourdates</h1>
            {tourdates ? (
                <div>
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
                    {!createBtnClicked ? (
                        <button
                            className="ui pink button"
                            onClick={handleCreateBtnClicked}
                        >
                            Add a Tourdate
                        </button>
                    ) : (
                            <div className="ui raised segment">
                                <div className="create-tour-header">
                                    <h3>Create A New Tour</h3>
                                    <div>
                                        <Icon
                                            className="remove"
                                            name="remove"
                                            onClick={e => {
                                                setCreateBtnClicked(false);
                                            }}
                                        />
                                    </div>
                                </div>
                                <NewTourdateForm />

                            </div>
                        )}

                </div>

            ) : (
                    <div className="ui segment">
                        <p></p>
                        <div className="ui active dimmer">
                            <div className="ui loader"></div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default TourdateIndex;