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
            <div className="ui grid">
                <div className="eight wide column" id="show-info">
                    <div className="show-components">
                        <VenueInfo tourdate={tourdate} />
                    </div>
                    <div className="show-components">
                        <Details tourdate={tourdate} />
                    </div>
                    <div className="show-components">
                        <Financials tourdate={tourdate} />
                    </div>
                    <div className="show-components">
                        <PromoterInfo tourdate={tourdate} />
                    </div>
                </div>
                <div className="eight wide column" id="chat">
                    <div className="ui segment"></div>
                </div>
            </div>
        </div>

    )
}

export default TourdateShow;