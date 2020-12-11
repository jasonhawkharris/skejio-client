import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Modal, Icon, Button } from 'semantic-ui-react';

import NotificationModel from '../../models/NotificationModel';
import { userState } from '../../recoil/atoms';

import './InviteModal.css'

const InviteModal = props => {
    console.log(props);
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const currentUser = useRecoilValue(userState);

    const message = `${currentUser.firstName} ${currentUser.lastName} has requested to work with you. Do you want to approve their request?`;
    const sender = currentUser._id;
    const user = props.artist._id;
    const invite = true;
    const data = { message, sender, user, invite }

    const handleSubmit = event => {
        event.preventDefault();
        NotificationModel.create(data)
            .then(response => {
                console.log(response);
                history.push('/success');
            });
        setOpen(false);
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
                    <h3>Send Invite</h3>
                    <div>
                        <Icon
                            name="remove"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                </div>
            </Modal.Header>
            <Modal.Content>
                Would you like to send an invite to work with &nbsp;
                <strong>{props.artist.artistName}</strong>?
                If they reject the invite, you cannot ask again.
            </Modal.Content>
            <Modal.Actions>
                <Button
                    color="grey"
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