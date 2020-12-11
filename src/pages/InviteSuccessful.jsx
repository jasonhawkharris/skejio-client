import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const InviteSuccessful = props => {
    const history = useHistory();

    useEffect(function () {
        setTimeout(() => {
            history.push('/artists');
        }, 5000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Invite Successful</h1>
            <p>Redirecting you back to the main page.</p>
            <Loader />
        </>
    )
}

export default InviteSuccessful;