import React from 'react';

const VenueInfo = props => {
    const tourdate = props.tourdate;

    return (
        <div className="eight wide column" id="venue-info">
            <div className="ui inverted raised segment venue-info">
                <div className="ui inverted list">
                    <h2 className="ui inverted header">Venue Info</h2>
                    <div className="item">
                        <div className="header">Venue</div>
                        {tourdate.name}
                    </div>
                    <div className="item">
                        <div className="header">Address</div>
                        {tourdate.address}<br />
                        {tourdate.address2 && <>tourdate.address2 </>}
                        {tourdate.city}, {tourdate.state} {tourdate.zip}<br />
                        {tourdate.country}
                    </div>
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