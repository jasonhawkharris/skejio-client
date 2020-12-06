import React, { useState } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import { Image } from 'cloudinary-react';

const ViewContract = props => {
    const [open, setOpen] = useState(false);

    return (
        <Modal
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
            trigger={props.trigger}
        >
            <Modal.Header>
                <div className="promoter-info-edit">
                    <h3>Upload Contract</h3>
                    <div>
                        <Icon name="remove"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                </div>
            </Modal.Header>
            <Modal.Content>
                <Image
                    cloudName="skej-io"
                    publicId={props.tourdate.contract}
                    width="300"
                />
            </Modal.Content>
        </Modal>
    )
}

export default ViewContract;