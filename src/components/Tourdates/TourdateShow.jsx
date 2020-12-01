import React from 'react';

import VenueInfo from './VenueInfo';
import Financials from './Financials';
import Details from './Details';
import PromoterInfo from './PromoterInfo';
import './Tourdates.css';

const TourdateShow = props => {
    const tourdate = props.location.dateProps.info;

    return (
        <div>
            <h1 className="ui header">Tourdate</h1>
            <div className="ui divider"></div>
            <div className="ui grid" id="show-details">
                <VenueInfo tourdate={tourdate} />
                <Details tourdate={tourdate} />
                <Financials tourdate={tourdate} />
                <PromoterInfo tourdate={tourdate} />
            </div>
        </div>

    )
}

export default TourdateShow;