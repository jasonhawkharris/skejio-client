import React from 'react';
import DeleteModal from '../Modals/DeleteModal';
import { Button, Icon } from 'semantic-ui-react';
import { formatDate } from '../../utils/helpers';
import TourdateModel from '../../models/TourdateModel';


const TourdateRow = props => {
    const tdate = props.info;

    return (
        <>
            {!tdate ? (
                <tr>
                    <td>loading...</td>
                </tr>
            ) : (
                    <tr>
                        <td>{formatDate(props.info.date)}</td>
                        <td>{tdate.city}, {tdate.state && tdate.state}</td>
                        <td>{tdate.name}</td>
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