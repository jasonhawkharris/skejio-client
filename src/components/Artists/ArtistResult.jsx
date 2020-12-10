import React from 'react';
import InviteModal from './InviteModal';

const ArtistResult = props => {
    console.log(props);
    return (
        <InviteModal
            trigger={
                <p>{props.artist.artistName}</p>
            }
            artist={props.artist}
        />

    )
}

export default ArtistResult;