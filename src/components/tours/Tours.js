/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import UserModel from '../../models/UserModel';

import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

import TourCard from './TourCard';

import './Tours.css';

const Tours = props => {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function () {
        if (localStorage.uid) {
            UserModel.show().then(response => {
                setUser(response.users);
            });
        }
    }, []);

    const generateTourCards = tours => {
        return tours.map(tour => {
            return <TourCard key={tour._id} tour={tour} />
        });
    }

    return (
        <div className="tour-list">
            {user ?
                generateTourCards(props.data) :
                <p>You have no tours scheduled.</p>
            }
        </div>
    );
}

export default Tours;