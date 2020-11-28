import React from 'react';
import DeleteModal from '../Modals/DeleteModal';
import { formatNumber } from 'humanize-plus';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import './Tours.css';
import UpdateTourModal from '../Modals/UpdateTourModal';

const TourRow = props => {
    return (
        <>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <Link
                    className="tour-link"
                    to={{
                        pathname: `tours/${props.tour._id}`,
                        showProps: {
                            tour: props.tour,
                        }
                    }}
                >
                    {props.tour.name}
                </Link>
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
            <td className="right aligned">
                <UpdateTourModal
                    trigger={
                        <Button className="ui icon mini button">
                            <i class="edit icon"></i>
                        </Button>}
                    tour={props.tour}
                />
                <DeleteModal
                    trigger={
                        <Button className="ui icon mini button">
                            <i class="trash icon"></i>
                        </Button>}
                    tourId={props.tour._id}
                    model="tour"
                />
            </td>
        </>
    )
}

export default TourRow;