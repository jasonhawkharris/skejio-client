import React, { useEffect } from 'react';

import useTourdates from '../../hooks/useTourdates';
import VenueInfo from './VenueInfo';
import Financials from './Financials';
import Details from './Details';
import PromoterInfo from './PromoterInfo';

import './Tourdates.css';

const TourdateShow = props => {
    const [tourdate, fetchTourdate] = useTourdates(props.location.dateProps.info._id);

    useEffect(() => {
        if (!tourdate) {
            fetchTourdate(props.location.dateProps.info._id);
        }
    })

    return (
        <div>
            {tourdate ? (
                <div className="ui grid">
                    <div className="eight wide column" id="show-info">
                        <div className="show-components">
                            <VenueInfo
                                fetch={() => fetchTourdate(tourdate._id)}
                                tdate={tourdate} />
                        </div>
                        <div className="show-components">
                            <Details tourdate={tourdate}
                                fetch={() => fetchTourdate(tourdate._id)}
                                tdate={tourdate} />
                        </div>
                        <div className="show-components">
                            <Financials
                                fetch={() => fetchTourdate(tourdate._id)}
                                tdate={tourdate} />
                        </div>
                        <div className="show-components">
                            <PromoterInfo
                                fetch={() => fetchTourdate(tourdate._id)}
                                tdate={tourdate} />
                        </div>
                    </div>
                    <div className="eight wide column" id="chat">
                        <div className="ui segment"></div>
                    </div>
                </div>
            ) : (
                    <div>Loading...</div>
                )}
        </div>
    )
}

export default TourdateShow;