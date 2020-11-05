import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import SingleThread from './SingleThread';
import ThreadModel from '../../models/ThreadModel';
// import useThreads from '../../hooks/useThreads';
import { userState } from '../../recoil/atoms';

const Threads = props => {
    // console.log('Threads props', props);
    // const threads = useThreads(props.tourDate)[0];
    // console.log(threads);
    const user = useRecoilValue(userState)._id;
    const tourDate = useState(props.tourDate)[0];
    const [content, setContent] = useState('');
    const threadData = { content, user, tourDate }

    const generateThreads = () => {
        return props.threads.map(thread => {
            return (
                <SingleThread
                    key={thread._id}
                    thread={thread}
                    fetch={props.fetch}
                />

            )
        })
    }

    const handleSubmitThread = event => {
        event.preventDefault();
        ThreadModel.create(threadData).then(response => props.fetch());
    }

    return (
        <div className="threads">
            {props.threads ?
                generateThreads() :
                <h1>loading...</h1>}
            <form onSubmit={handleSubmitThread} class="ui reply form">
                <div className="field">
                    <textarea
                        className="content-area"
                        name="content"
                        onChange={e => setContent(e.target.value)}
                    ></textarea>
                </div>
                <input type="hidden" id="tourDate" name="tourDate" value={tourDate} />
                <input type="hidden" id="user" name="user" value={user} />
                <input type="submit" className="ui blue labeled submit icon button" />
            </form>
        </div >
    )
}

export default Threads;