import React, { useState } from 'react';

import { Modal, Icon, Button } from 'semantic-ui-react';

import './InviteModal.css'

const InviteModal = props => {
    const [open, setOpen] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <Modal
            trigger={props.trigger}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
            size="small"
        >
            <Modal.Header>
                <div className="update-tour-header">
                    <h3>Edit Thread</h3>
                    <div>
                        <Icon
                            name="remove"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                </div>
            </Modal.Header>
            <Modal.Content>
                Would you like to send an invite to work with {props.artist.artistName}? Only do so if you already have a working relationship. If they denies your request, you will not be able to send another. However, they will still be able to request to work with you.
            </Modal.Content>
            <Modal.Actions>
                <Button
                    color="gray"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </Button>
                <form
                    className="ui form next-to"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="submit"
                        className="ui pink submit button"
                        value="Send Invite"
                    />
                </form>
            </Modal.Actions>
        </Modal>
    )
}

export default InviteModal;