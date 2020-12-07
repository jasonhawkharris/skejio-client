import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';


import TourdateModel from '../../../models/TourdateModel';

const DetailsEdit = props => {
    const [open, setOpen] = useState(false);
    const [loadIn, setLoadIn] = useState(props.tourdate.loadIn);
    const [doors, setDoors] = useState(props.tourdate.doors);
    const [showStart, setShowStart] = useState(props.tourdate.showStart);
    const [showEnd, setShowEnd] = useState(props.tourdate.showEnd);
    const dateOfShow = props.tourdate.date.split('T')[0];
    const data = { loadIn, doors, showStart, showEnd };

    const handleSubmit = e => {
        e.preventDefault();

        TourdateModel.update(props.tourdate._id, data)
            .then(response => {
                props.fetch();
                setOpen(false);
            })
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={props.trigger}
        >
            <Modal.Header>
                <div className="promoter-info-edit">
                    <h3>Edit Show Details</h3>
                    <div>
                        <Icon name="remove"
                            onClick={() => setOpen(false)}
                        ></Icon>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Content>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label for="loadIn">Load In</label>
                        <input
                            type="time"
                            name="loadIn"
                            onChange={e => {
                                setLoadIn(`${dateOfShow}T${e.target.value}:00.000Z`)
                            }}
                            value={loadIn && loadIn.split('T')[1].split('.')[0]}
                        />
                    </div>
                    <div className="field">
                        <label for="doors">Doors</label>
                        <input
                            type="time"
                            name="doors"
                            onChange={e => {
                                setDoors(`${dateOfShow}T${e.target.value}:00.000Z`)
                            }}
                            value={doors && doors.split('T')[1].split('.')[0]}
                        />
                    </div>
                    <div className="field">
                        <label for="showStart">Show Start</label>
                        <input
                            type="time"
                            name="showStart"
                            onChange={e => {
                                setShowStart(`${dateOfShow}T${e.target.value}:00.000Z`)
                            }}
                            value={showStart && showStart.split('T')[1].split('.')[0]}
                        />
                    </div>
                    <div className="field">
                        <label for="showEnd">Show End</label>
                        <input
                            type="time"
                            name="showEnd"
                            onChange={e => {
                                setShowEnd(`${dateOfShow}T${e.target.value}:00.000Z`)
                            }}
                            value={showEnd && showEnd.split('T')[1].split('.')[0]}
                        />
                    </div>
                    <div className="field">
                        <input
                            type="submit"
                            className="ui pink submit button"
                            value="Submit Changes"
                        />
                    </div>
                </form>
            </Modal.Content>
        </Modal>
    )
}

export default DetailsEdit;