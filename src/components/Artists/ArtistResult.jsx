import React from 'react';
import InviteModal from './InviteModal';

const ArtistResult = props => {
    console.log(props);
    return (
        <InviteModal
            trigger={
                <p className="artist-result">{props.artist.artistName}</p>
            }
            artist={props.artist}
        />

    )
}

export default ArtistResult;