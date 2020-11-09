/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TourModel from '../../models/TourModel';

import { userState } from '../../recoil/atoms';
import TourCard from './TourCard';

import './Tours.css';

const Tours = props => {
    const user = useRecoilValue(userState);
    const [name, setName] = useState('');
    const [artist] = useState(user._id);
    const tourData = { name, artist };
    const [addBtnClicked, setAddBtnClicked] = useState(false);

    const generateTourCards = tours => {
        return tours.map(tour => {
            return (
                <NavLink to={{
                    pathname: `/tour-dates/${tour._id}`,
                    tourDates: tour.tourDates,
                    tourName: tour.name,
                }}>
                    <TourCard
                        key={tour._id}
                        tour={tour}
                        fetch={fetch.props}
                    />
                </NavLink>
            )

        });
    }

    const toggleAddBtn = (event) => {
        if (addBtnClicked) {
            setAddBtnClicked(false);
        } else {
            setAddBtnClicked(true);
        }
    }

    const handleSubmitTour = (event) => {
        event.preventDefault();
        TourModel.create(tourData);
        props.fetch();
        toggleAddBtn();
    }

    return (
        <div className="tour-list">
            {generateTourCards(props.data)}
            {!addBtnClicked ?
                <button className="ui blue submit button" onClick={toggleAddBtn}>Add A Tour</button> :
                <form className="ui form">
                    <div className="ui fluid big input">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter a name for this tour"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <input type="hidden" name="artist" value={artist} />
                    <input className="ui blue submit button" type="submit" value="Add This Tour" onClick={handleSubmitTour} />
                </form>
            }
        </div>
    );
}

export default Tours;