import React from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from '../../recoil/atoms'

import './Team.css';

const Team = props => {
    const user = useRecoilValue(userState);

    return (
        <div>
            <ul>
                <li>
                    Manager: {user.manager ? (
                        <span>{user.manager}</span>
                    ) : (
                            <button
                                className="ui mini button"
                            >Add a manager</button>
                        )}
                </li>
            </ul>
        </div>
    )
}

export default Team;