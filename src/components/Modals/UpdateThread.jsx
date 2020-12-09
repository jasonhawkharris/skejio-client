import React, { useState } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import ThreadModel from '../../models/ThreadModel';

const UpdateThread = props => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(props.thread.content);
    const data = { content };

    const handleSubmit = e => {
        e.preventDefault();
        ThreadModel.update(props.thread._id, data)
            .then(response => {
                props.fetch();
            });
        setOpen(false);
    }

    return (
        <Modal
            trigger={props.trigger}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
        >
            <Modal.Header>
                <div className="update-tour-header">
                    <h3>Edit Thread</h3>
                    <div><Icon name="remove" onClick={() => setOpen(false)} /></div>
                </div>
            </Modal.Header>
            <Modal.Content>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input
                            type="text"
                            name="content"
                            onChange={e => setContent(e.target.value)}
                            value={content}
                            placeholder="Type content of thread here."
                        />
                    </div>
                    <div className="field">
                        <input
                            type="submit"
                            className="ui pink button"
                            value="Submit Changes"
                        />
                    </div>
                </form>
            </Modal.Content>
        </Modal>
    )
}

export default UpdateThread;