import React from 'react';

import VenueInfoEdit from '../Forms/EditTourdate/VenueInfoEdit';

import './Tourdates.css';

const VenueInfo = props => {
    const tourdate = props.tdate;

    return (
        <div className="eight wide column" id="venue-info">
            <div className="section-heading">
                <h2 className="heading">Venue Info</h2>
                <VenueInfoEdit
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
                        <div className="header">Venue</div>
                        {tourdate.name}
                    </div><br />
                    <div className="item">
                        <div className="header">Address</div>
                        {tourdate.address}<br />
                        {tourdate.address2 && <>tourdate.address2 </>}
                        {tourdate.city}, {tourdate.state} {tourdate.zip}<br />
                        {tourdate.country}
                    </div><br />
                    <div className="item">
                        <div className="header">Website</div>
                        <a href={tourdate.venueLink}>Ticketmaster Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VenueInfo;