import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';

import ThreadModel from '../../models/ThreadModel';
import { userState } from '../../recoil/atoms';

const NewThread = props => {
    const user = useRecoilValue(userState);
    const [author] = useState(user._id);
    const [tourdate] = useState(props.tourdate._id);
    const [content, setContent] = useState('');
    const [artist] = useState(props.tourdate.artist);
    const data = { author, tourdate, content, artist };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
        ThreadModel.create(data)
            .then(response => {
                props.fetch();
                setContent('');
            });

    }
    return (
        <form className="ui reply form" onSubmit={handleSubmit}>
            <div className="field">
                <textarea
                    name="content"
                    onChange={e => setContent(e.target.value)}
                    value={content}
                    placeholder="Type thread content here..."
                ></textarea>
            </div>
            <button type="submit" className="ui blue labeled submit icon button">
                <i className="icon edit"></i> Add Thread
            </button>
        </form>
    )
}

export default NewThread;