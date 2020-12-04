import React from 'react';
import { formatNumber } from 'humanize-plus';

const Financials = props => {
    const tourdate = props.tdate;

    return (
        <div className="eight wide column" id="financials">
            <div className="section-heading">
                <h2 className="heading">Financial Info</h2>
                <i className="edit icon"></i>
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