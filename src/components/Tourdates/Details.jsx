import React from 'react';

const Details = props => {
    const tourdate = props.tourdate;

    return (
        <div className="eight wide column" id="show-details">
            <div className="ui inverted raised segment">
                <div className="ui inverted list">
                    <h3 className="ui inverted header">Show Details</h3>
                    <div className="ui inverted divider"></div>
                    <div className="item">
                        <div className="header">Load In</div>
                        {tourdate.loadIn ? tourdate.loadIn : 'TBA'}
                    </div>
                    <div className="item">
                        <div className="header">Doors</div>
                        {tourdate.doors ? tourdate.doors : 'TBA'}
                    </div>
                    <div className="item">
                        <div className="header">Showtime</div>
                        {tourdate.showStart ? tourdate.showStart : 'TBA'}
                    </div>
                    <div className="item">
                        <div className="header">Show End</div>
                        {tourdate.showEnd ? tourdate.showEnd : 'TBA'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;