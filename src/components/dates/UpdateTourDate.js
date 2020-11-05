import React, { useState } from 'react';

import TourDateModel from '../../models/TourDateModel';
import './Dates.css';

const UpdateTourDate = props => {
    const tourDate = props.location.infoProps.tourDate
    const [date, setDate] = useState(tourDate.date);
    const [fee, setFee] = useState(tourDate.fee);
    const [deposit, setDeposit] = useState(tourDate.deposit);
    const [promoterName, setPromoterName] = useState(tourDate.promoterName);
    const tourDateData = { date, deposit, promoterName, fee };

    const handleUpdateForm = event => {
        event.preventDefault()
        TourDateModel.edit(props.match.params.id, tourDateData).then(response => console.log(response));
        props.history.push(`/tour-date/${props.match.params.id}`);
    }

    return (
        <div className="update">
            <h1>Update This Tourdate</h1>
            <form className="ui form" onSubmit={handleUpdateForm}>
                <div className="fields">
                    <div className="ui checkbox">
                        <input type="checkbox" />
                        <label>Completed?</label>
                    </div>
                    <div className="ui checkbox">
                        <input type="checkbox" />
                        <label>Contract Signed?</label>
                    </div>
                </div>

                <div className="fields">
                    <div className="ui checkbox">
                        <label>Paid In Full</label>
                        <input
                            type="checkbox"
                            name="paidInFull"
                        />
                    </div>
                    <div className="ui checkbox">
                        <label>Post Show Form Submitted</label>
                        <input type="checkbox" />
                    </div>
                    <div className="ui checkbox">
                        <input type="checkbox" name="depositReceived" />
                        <label>Deposit Received?</label>
                    </div>
                </div>

                <div className="ui field">
                    <label>Date of Show</label>
                    <input
                        type="date"
                        name="date"
                        onChange={e => setDate(e.target.value)}
                        value={date}
                    />
                    <label>Fee</label>
                    <input
                        type="text"
                        name="fee"
                        onChange={e => setFee(e.target.value)}
                        value={fee}
                    />
                    <label>Deposit Amount</label>
                    <input
                        type="text"
                        name="deposit"
                        onChange={e => setDeposit(e.target.value)}
                        value={deposit} />
                    <label>Promoter Name</label>
                    <input
                        type="text"
                        name="promoterName"
                        onChange={e => setPromoterName(e.target.value)}
                        value={promoterName} />
                </div>
                <input className="ui button" type="submit" value="Submit Edits" />
            </form>
        </div>

    )
}

export default UpdateTourDate;