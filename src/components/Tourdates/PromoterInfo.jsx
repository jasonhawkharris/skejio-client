import React from 'react';

const PromoterInfo = props => {
    const tourdate = props.tourdate;
    return (
        <div className="eight wide column" id="promoter-info">
            <div className="section-heading">
                <h2 className="heading">Promoter Info</h2>
                <i className="edit icon"></i>
            </div>
            <div className="ui divider"></div>
            <div className="ui segment">
                <div className="ui list">
                    <div className="item">
                        <div className="header">Name</div>
                        {tourdate.promoterName ? tourdate.promoterName : 'N/A'}
                    </div>
                    <div className="item">
                        <div className="header">Email</div>
                        {tourdate.promoterEmail ? tourdate.promoterEmail : 'N/A'}
                    </div>
                    <div className="item">
                        <div className="header">Phone</div>
                        {tourdate.promoterPhone ? tourdate.promoterPhone : 'N/A'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoterInfo;