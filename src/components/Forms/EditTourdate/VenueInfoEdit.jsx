import React, { useState } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import TourdateModel from '../../../models/TourdateModel';

const VenueInfoEdit = props => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(props.tourdate.name);
    const [address, setAddress] = useState(props.tourdate.address);
    const [address2, setAddress2] = useState(props.tourdate.address2);
    const [venueLink, setVenueLink] = useState(props.tourdate.venueLink);
    const data = { name, address, address2, venueLink };

    const handleSubmit = event => {
        event.preventDefault();
        TourdateModel.update(props.tourdate._id, data)
            .then(response => {
                console.log(response);
                props.fetch();
                setOpen(false);
            });
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
                    <h3>Edit Venue Info</h3>
                    <div>
                        <Icon name="remove"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                </div>
            </Modal.Header>
            <Modal.Content>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Venue Name</label>
                        <input
                            type="text"
                            name="venueName"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            placeholder="Venue Name"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="address">Address Line 1</label>
                        <input
                            type="text"
                            name="address"
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                            placeholder="Address Line 1"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="address2">Address Line 2</label>
                        <input
                            type="text"
                            name="address2"
                            onChange={e => setAddress2(e.target.value)}
                            value={address2}
                            placeholder="Address Line 2"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="venueLink">Venue Link</label>
                        <input
                            type="text"
                            name="venueLink"
                            onChange={e => setVenueLink(e.target.value)}
                            value={venueLink}
                            placeholder="Venue Link"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="submit"
                            className="ui pink submit button"
                            value="Submit Edits"
                        />
                    </div>
                </form>
            </Modal.Content>
        </Modal>
    )
}

export default VenueInfoEdit;
