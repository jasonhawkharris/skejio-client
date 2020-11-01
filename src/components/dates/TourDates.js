/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import UserModel from '../../models/UserModel';

import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

import TourDateCard from './TourDateCard';

import './Dates.css';

const TourDates = props => {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function () {
        if (localStorage.uid) {
            UserModel.show().then(response => {
                setUser(response.users);
            });
        }
    }, []);

    const generateTourDateCards = tourDates => {
        return tourDates.map(tourDate => {
            return <TourDateCard key={tourDate._id} tourDate={tourDate} />
        });
    }

    return (
        <div className="tourDates-list">
            {user ?
                generateTourDateCards(props.data) :
                <p>You have no tour dates scheduled.</p>
            }
        </div>
    )
}

export default TourDates;