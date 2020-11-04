import React from 'react';
// import { NavLink } from 'react-router-dom';

// import TourDateCard from '../dates/TourDateCard';
import './Tours.css';


// only do this after you manage to link the Tour here.
const TourShowPage = props => {
    // const generateTourDates = tourDates => {
    //     try {
    //         return tourDates.map(tourDate => {
    //             return (
    //                 <NavLink to={`/tour-date/${tourDate._id}`} >
    //                     <TourDateCard
    //                         key={tourDate._id}
    //                         tourDate={tourDate}
    //                     />
    //                 </NavLink >
    //             )
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div className="tourDates-list">
            {/* {generateTourDates()} */}
            <h1>We are at the tour show page for {props.id}</h1>
        </div>
    )
}

export default TourShowPage;