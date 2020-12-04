import React from 'react';

import DetailsEdit from '../Forms/EditTourdate/DetailsEdit';
import { getTime } from '../../utils/helpers';

const Details = props => {
    const tourdate = props.tourdate;

    return (
        <div className="eight wide column" id="show-details">
            <div className="section-heading">
                <h2 className="heading">Show Details</h2>
                <DetailsEdit
                    trigger={
                        <i className="edit icon"></i>
                    }
                    tourdate={tourdate}
                    fetch={props.fetch}
                />
            </div>
            <div className="ui divider"></div>
            <div className="ui segment">
                <div className="ui list">
                    <div className="item">
                        <div className="header">Load In</div>
                        {tourdate.loadIn ? getTime(tourdate.loadIn) : 'TBA'}
                    </div>
                    <div className="item">
                        <div className="header">Doors</div>
                        {tourdate.doors ? getTime(tourdate.doors) : 'TBA'}
                    </div>
                    <div className="item">
                        <div className="header">Showtime</div>
                        {tourdate.showStart ? getTime(tourdate.showStart) : 'TBA'}
                    </div>
                    <div className="item">
                        <div className="header">Show End</div>
                        {tourdate.showEnd ? getTime(tourdate.showEnd) : 'TBA'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;