import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';

import TourdateModel from '../../../models/TourdateModel';

const FinancialsEdit = props => {
    const [open, setOpen] = React.useState(false);
    const [fee, setFee] = useState(props.tourdate.fee)
    const [deposit, setDeposit] = useState(props.tourdate.deposit);
    const [depositReceived, setDepositReceived] = useState('');
    const [contractSigned, setContractSigned] = useState('');
    const [paidInFull, setPaidInFull] = useState('');
    const data = { fee, deposit, depositReceived, contractSigned, paidInFull };

    const getBool = key => {
        if (key === '') return null;
        return key === 'y' ? true : false;
    }

    const handleSubmit = e => {
        e.preventDefault();
        data.depositReceived = getBool(depositReceived);
        data.contractSigned = getBool(contractSigned);
        data.paidInFull = getBool(paidInFull);

        TourdateModel.update(props.tourdate._id, data)
            .then(response => {
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
                    <h3>Edit Financial Info</h3>
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
                        <label for="fee">Total Owed to Artist</label>
                        <input
                            type="text"
                            name="fee"
                            onChange={e => setFee(e.target.value)}
                            value={fee}
                            placeholder="Fee to be paid"
                        />
                    </div>
                    <div className="field">
                        <label for="deposit">Contracted Deposit</label>
                        <input
                            type="text"
                            name="deposit"
                            onChange={e => setDeposit(e.target.value)}
                            value={deposit}
                            placeholder="Deposit Amount"
                        />
                    </div>
                    <div className="field">
                        <label for="depositReceived">
                            Has the agreed to deposit been paid?
                        </label>
                        <select
                            name="depositReceived"
                            onChange={e => setDepositReceived(e.target.value)}
                            value={depositReceived}
                        >
                            <option value="">--Select an Option--</option>
                            <option value="y">Yes</option>
                            <option value="n">No</option>
                        </select>
                    </div>
                    <div className="field">
                        <label for="contractSigned">
                            Has a contract been signed by the artist for this tourdate?
                        </label>
                        <select
                            name="contractSigned"
                            onChange={e => setContractSigned(e.target.value)}
                            value={contractSigned}
                        >
                            <option value="">--Select an Option--</option>
                            <option value="y">Yes</option>
                            <option value="n">No</option>
                        </select>
                    </div>
                    <div className="field">
                        <label for="paidInFull">
                            Has the artist been paid in full for this date?
                        </label>
                        <select
                            name="paidInFull"
                            onChange={e => setPaidInFull(e.target.value)}
                            value={paidInFull}
                        >
                            <option value="">--Select an Option--</option>
                            <option value="y">Yes</option>
                            <option value="n">No</option>
                        </select>
                    </div>

                    <div className="field">
                        <input className="ui pink submit button" type="submit" value="Submit Edits" />
                    </div>
                </form>

            </Modal.Content>
        </Modal >
    )
}

export default FinancialsEdit;