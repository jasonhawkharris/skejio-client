import React from 'react';

const TourShow = props => {
    const tourdates = props.location.showProps.tour.tourdates;

    const generateTourdates = () => {
        return tourdates.map(tourdate => {
            return <h1>{tourdate.venue}</h1>
        })
    }

    return (
        <div>
            <h1>{props.location.showProps.name}</h1>
            {tourdates ? (
                <>
                    { generateTourdates()}
                </>
            ) : (
                    <>
                        <p>No tourdates attached to this tour.</p>
                    </>
                )}
        </div>

    )
}

export default TourShow;