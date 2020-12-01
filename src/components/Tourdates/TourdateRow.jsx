import React, { useEffect } from 'react';
import DeleteModal from '../Modals/DeleteModal';
import { Button, Icon } from 'semantic-ui-react';
import { formatDate } from '../../utils/helpers';
import TourdateModel from '../../models/TourdateModel';
import useVenues from '../../hooks/useVenues';


const TourdateRow = props => {
    const [venue, fetchVenue] = useVenues(props.venue);
    console.log('venue', venue);

    useEffect(function () {
        console.log(venue);
        if (!venue) {
            fetchVenue(props.venue);
        }
    });

    return (
        <>
            {!venue ? (
                <tr>
                    <td>loading...</td>
                </tr>
            ) : (
                    <tr>
                        <td>{formatDate(props.info.date)}</td>
                        <td>{venue.city.name}, {venue.state.stateCode}</td>
                        <td>{venue.name}</td>
                        <td>{props.info.doors ? props.info.doors : 'TBA'}</td>
                        <td>{props.info.showStart ? props.info.showStart : 'TBA'}</td>
                        <td>{props.info.fee ? props.info.fee : 'TBA'}</td>
                        <td>{props.info.paidInFull ? 'Yes' : 'No'}</td>
                        <td className="right aligned">
                            <button className="ui icon mini button">
                                <i className="edit icon"></i>
                            </button>
                            <DeleteModal
                                trigger={
                                    <Button className="ui icon mini button">
                                        <Icon name="trash"></Icon>
                                    </Button>
                                }
                                id={props.info._id}
                                model={"tourdate"}
                                modelType={TourdateModel}
                                user={props.user}
                                fetch={props.fetch}
                            />
                        </td>
                    </tr>
                )}
        </>
    )
}

export default TourdateRow;