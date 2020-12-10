import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatNumber } from 'humanize-plus';

import DeleteModal from '../Modals/DeleteModal';
import { Button, Icon, Loader } from 'semantic-ui-react';
import { formatDate } from '../../utils/helpers';
import TourdateModel from '../../models/TourdateModel';
import { getTime } from '../../utils/helpers';


const TourdateRow = props => {
    const tdate = props.info;

    return (
        <>
            {!tdate ? (
                <tr>
                    <Loader />
                </tr>
            ) : (
                    <tr>
                        <td>{formatDate(props.info.date)}</td>
                        <td>{tdate.city}, {tdate.state && tdate.state}</td>
                        <td>{tdate.name}</td>
                        <td>{props.info.loadIn ? getTime(props.info.loadIn) : 'TBA'}</td>
                        <td>{props.info.doors ? getTime(props.info.doors) : 'TBA'}</td>
                        <td>{props.info.showStart ? getTime(props.info.showStart) : 'TBA'}</td>
                        <td>{props.info.fee ? `$${formatNumber(props.info.fee, 2)}` : 'TBA'}</td>
                        <td>{props.info.paidInFull ? 'Yes' : 'No'}</td>
                        <td className="right aligned">
                            <NavLink
                                to={{
                                    pathname: `/tourdate/${tdate._id}`,
                                    dateProps: {
                                        info: tdate,
                                    }
                                }}
                            >
                                <button className="ui icon mini button">
                                    <i className="info icon"></i>
                                </button>
                            </NavLink>
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
                )
            }
        </>
    )
}

export default TourdateRow;