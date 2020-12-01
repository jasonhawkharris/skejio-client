import React from 'react';

const PromoterInfo = props => {
    const tourdate = props.tourdate;
    return (
        <div className="eight wide column" id="promoter-info">
            <div className="ui inverted segment">
                <div className="ui inverted list">
                    <h3 className="ui inverted header">Promoter Info</h3>
                    <div className="ui inverted divider"></div>
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