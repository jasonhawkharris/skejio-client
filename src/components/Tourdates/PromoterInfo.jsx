import React from 'react';

import PromoterInfoEdit from '../Forms/EditTourdate/PromoterInfoEdit';

const PromoterInfo = props => {
    const tourdate = props.tdate;

    return (
        <div className="eight wide column" id="promoter-info">
            <div className="section-heading">
                <h2 className="heading">Promoter Info</h2>
                <PromoterInfoEdit
                    trigger={
                        <i className="edit icon"></i>
                    }
                    tourdate={tourdate}
                    fetch={props.fetch}
                />
            </div>
            <div className="ui divider"></div>
            <div>
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