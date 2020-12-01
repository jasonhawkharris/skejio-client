import React from 'react';

const PromoterInfo = props => {
    const tourdate = props.tourdate;
    return (
        <div className="eight wide column" id="promoter-info">
            <div className="ui inverted segment">
                <div className="ui inverted list">
                    <h2 className="ui inverted header">Promoter Info</h2>
                    <div className="item">
                        <div className="header">Name</div>
                        {tourdate.promoterName}
                    </div>
                    <div className="item">
                        <div className="header">Email</div>
                        {tourdate.promoterEmail}
                    </div>
                    <div className="item">
                        <div className="header">Phone</div>
                        {tourdate.promoterPhone}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoterInfo;