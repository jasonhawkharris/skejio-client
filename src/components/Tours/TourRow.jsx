import React from 'react';
import DeleteModal from '../Modals/DeleteModal';
import { formatNumber } from 'humanize-plus';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import UpdateTourModal from '../Modals/UpdateTourModal';
import TourModel from '../../models/TourModel';
import './Tours.css';

const TourRow = props => {
    const calculateGross = () => {
        const fees = props.tour.tourdates.map(tourdate => {
            return tourdate.fee;
        });
        if (!fees.length) return 0;
        return fees.reduce((a, b) => a + b);
    }

    return (
        <>
            <td>
                <NavLink
                    to={`/tours/${props.tour._id}`}
                    className="artist-link"
                >
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
                ${formatNumber(calculateGross(props.tour.gross), 2)}
            </td>
            <td className="right aligned">
                <UpdateTourModal
                    trigger={
                        <Button className="ui icon mini button">
                            <i class="edit icon"></i>
                        </Button>
                    }
                    tour={props.tour}
                    user={props.user}
                    fetch={props.fetch}
                />
                <DeleteModal
                    trigger={
                        <Button className="ui icon mini button">
                            <i class="trash icon"></i>
                        </Button>}
                    id={props.tour._id}
                    model="tour"
                    modelType={TourModel}
                    user={props.user}
                    fetch={props.fetch}
                />
            </td>
        </>
    )
}

export default TourRow;