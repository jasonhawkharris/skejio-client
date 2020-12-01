import React from 'react';
import { formatNumber } from 'humanize-plus';

const Financials = props => {
    const tourdate = props.tourdate;

    return (
        <div className="eight wide column" id="show-details">
            <div className="ui inverted segment financials">
                <div className="ui inverted list">
                    <h2 className="ui inverted header">Financial Info</h2>
                    <div className="item">
                        <strong>Fee: </strong> ${formatNumber(tourdate.fee, 2)}
                    </div>
                    <div className="item">
                        <strong>Deposit: </strong> ${formatNumber(tourdate.deposit, 2)}
                    </div>
                    <div className="item">
                        <strong>Deposit Received:</strong> {tourdate.depositReceived ? 'yes' : 'no'}
                    </div>
                    <div className="item">
                        <strong>Contract:</strong>
                    </div>
                    <div className="item">
                        <strong>Contract Signed:</strong> {tourdate.contractSigned ? 'yes' : 'no'}
                    </div>
                    <div className="item">
                        <strong>Paid:</strong> {tourdate.paid ? 'yes' : 'no'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financials;