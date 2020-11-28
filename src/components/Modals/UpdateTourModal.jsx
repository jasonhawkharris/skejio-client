import React from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import TourModel from '../../models/TourModel';

const UpdateTourModal = props => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(props.tour.name);
    const tourData = { name };

    const handleSubmit = event => {
        event.preventDefault();
        TourModel.update(props.tour._id, tourData)
            .then(response => {
                props.fetch()
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
                <div className="update-tour-header">
                    <h3>Edit Tour</h3>
                    <div><Icon name="remove" onClick={() => setOpen(false)} /></div>
                </div>
            </Modal.Header>
            <Modal.Content>
                <form className="ui form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        placeholder="Name of this tour"
                    /><br /><br />
                    <input type="submit" className="ui pink submit button" value="Submit Edits" />
                </form>
            </Modal.Content>
        </Modal>
    )
}

export default UpdateTourModal;