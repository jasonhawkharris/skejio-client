import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import { formatCreatedDate } from '../../utils/helpers';

import './Profile.css';

const Profile = props => {
    const user = useRecoilValue(userState);
    console.log(user);
    return (
        <div className="ui raised inverted segment">
            <h1>{user.artistName}</h1>
            <p>Member since: {formatCreatedDate(user.createdAt)}</p>
            <h3>Basic Info</h3>
            <ul>
                <li><strong>Name:</strong> {user.firstName} {user.lastName}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Username:</strong> @{user.username}</li>
            </ul>
            <h3>Management</h3>
            <ul>
                <li><strong>Company:</strong> {user.manager.company.name}</li>
                <li><strong>Manager:</strong> {user.manager.firstName} {user.manager.lastName}</li>
                <li><strong>Email:</strong> {user.manager.email}</li>
            </ul>
            <h3>Booking</h3>
            <ul>
                <li><strong>Agency:</strong> {user.agent.agency.name}</li>
                <li><strong>Manager:</strong> {user.agent.firstName} {user.agent.lastName}</li>
                <li><strong>Email:</strong> {user.agent.email}</li>
            </ul>
        </div>
    )
}

export default Profile;