import React, { useState } from 'react';

import './Dates.css';

const UpdateTourDate = props => {
    // console.log(props.location.infoProps);
    const tourDate = props.location.infoProps.tourDate
    const [date, setDate] = useState(tourDate.date);
    const [fee, setFee] = useState(tourDate.fee);
    const [deposit, setDeposit] = useState(tourDate.deposit);
    const [promoterName, setPromoterName] = useState(tourDate.promomterName);
    const tourDateData = { date, deposit, promoterName, fee };

    const handleUpdateForm = event => {
        event.preventDefault()
        console.log(tourDateData);
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
                        name="depositAmout"
                        onChange={e => setDeposit(e.target.value)}
                        value={deposit} />
                    <label>Promoter Name</label>
                    <input
                        type="text"
                        name="promoterName"
                        onChange={e => setPromoterName(e.target.value)}
                        value={promoterName} />
                </div>
                <input className="ui button" type="submit" value="Edit" />
            </form>
        </div>

    )
}

export default UpdateTourDate;