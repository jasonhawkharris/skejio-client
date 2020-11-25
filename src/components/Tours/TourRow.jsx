import React from 'react';
import { formatNumber } from 'humanize-plus';
import { NavLink } from 'react-router-dom';

import './Tours.css';

const TourRow = props => {
    return (
        <>
            <td>
                <NavLink className="tour-link" to={`tours/${props.tour._id}`}>
                    {props.tour.name}
                </NavLink>
            </td>
            <td>
                <NavLink className="artist-link" to='/profile'>
                    {props.user.artistName}
                </NavLink>
            </td>
            <td>
                {props.tour.tourdates.length}
            </td>
            <td>
                ${formatNumber(props.tour.gross, 2)}
            </td>
        </>
    )
}

export default TourRow;