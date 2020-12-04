import React from 'react';
import { formatNumber } from 'humanize-plus';

import FinancialsEdit from '../Forms/EditTourdate/FinancialsEdit';

const Financials = props => {
    const tourdate = props.tdate;

    return (
        <div className="eight wide column" id="financials">
            <div className="section-heading">
                <h2 className="heading">Financial Info</h2>
                <FinancialsEdit
                    trigger={
                        <i className="edit icon"></i>
                    }
                    tourdate={tourdate}
                    fetch={props.fetch}
                />
            </div>
            <div className="ui divider"></div>
            <div className="ui segment">
                <div className="ui list">
                    <div className="item">
                        <strong>Fee: </strong> ${formatNumber(tourdate.fee, 2)}
                    </div>
                    <div className="item">
                        <strong>Deposit: </strong> ${formatNumber(tourdate.deposit, 2)}
                    </div>
                    <div className="item">
                        <strong>Deposit Received?</strong> {tourdate.depositReceived ? 'Yes' : 'No'}
                    </div>
                    <div className="item">
                        <strong>Contract Offered?</strong> {tourdate.contract ? 'Yes' : 'No'}
                    </div>
                    <div className="item">
                        <strong>Contract Signed?</strong> {tourdate.contractSigned ? 'Yes' : 'No'}
                    </div>
                    <div className="item">
                        <strong>Paid In Full?</strong> {tourdate.paid ? 'Yes' : 'No'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financials;