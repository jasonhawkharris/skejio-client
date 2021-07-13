import React from 'react';
import { useRecoilValue } from 'recoil';

import Tours from './Tours';
import { userState } from '../../recoil/atoms';
import useTours from '../../hooks/useTours';

import './Tours.css';


const ToursPage = () => {
    const user = useRecoilValue(userState);
    const [tours, fetchTours] = useTours(user._id);

    return (
        <div className="all-tours">
            <h1>My Tours</h1>
            {tours ?
                <Tours
                    data={tours}
                    fetch={() => fetchTours(user._id)}
                /> :
                <p>No tours scheduled.</p>
            }


        </div>
    )
}

export default ToursPage;