import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import TourdateModel from '../../../models/TourdateModel';

import './EditTourdate.css';

const PromoterInfoEdit = props => {
    const [open, setOpen] = React.useState(false);
    const [promoterName, setPromoterName] = useState(props.tourdate.promoterName)
    const [promoterEmail, setPromoterEmail] = useState(props.tourdate.promoterEmail);
    const [promoterPhone, setPromoterPhone] = useState(props.tourdate.promoterPhone);
    const data = { promoterName, promoterEmail, promoterPhone }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
        // TourdateModel.update(props.tourdate._id, data)
        //     .then(response => {
        //         props.fetch();
        //         setOpen(false);
        //     });
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
                    <h3>Edit Promoter Info</h3>
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
                        <input
                            type="text"
                            name="promoterName"
                            onChange={e => setPromoterName(e.target.value)}
                            value={promoterName}
                            placeholder="Name"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="text"
                            name="promoterEmail"
                            onChange={e => setPromoterEmail(e.target.value)}
                            value={promoterEmail}
                            placeholder="Email"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="text"
                            name="promoterPhone"
                            onChange={e => setPromoterPhone(e.target.value)}
                            value={promoterPhone}
                            placeholder="Phone"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="submit"
                            className="ui pink button"
                        />
                    </div>
                </form>
            </Modal.Content>
        </Modal >
    )
}

export default PromoterInfoEdit;