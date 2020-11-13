import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import SingleThread from './SingleThread';
import ThreadModel from '../../models/ThreadModel';
import { userState } from '../../recoil/atoms';



const Threads = props => {
    const user = useRecoilValue(userState)._id;
    const tourDate = useState(props.tourDate)[0];
    const [startThreadClicked, setStartThreadClicked] = useState(false);
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
            );
        });
    }


    const handleSubmitThread = event => {
        event.preventDefault();
        ThreadModel.create(threadData)
            .then(response => props.fetch());
        event.target[0].value = '';
        setStartThreadClicked(false);
    }

    const handleStartThreadClicked = event => {
        if (startThreadClicked) {
            setStartThreadClicked(false);
        } else {
            setStartThreadClicked(true);
        }
    }

    return (
        <div className="threads">
            {!startThreadClicked ? (
                <button
                    className='ui green submit button'
                    onClick={handleStartThreadClicked}
                >
                    Start A New Thread
                </button>) : (
                    <form onSubmit={handleSubmitThread} className="ui reply form">
                        <div className="field">
                            <textarea
                                className="content-area"
                                name="content"
                                onChange={e => setContent(e.target.value)}
                            ></textarea>
                        </div>
                        <input
                            type="hidden"
                            id="tourDate"
                            name="tourDate"
                            value={tourDate}
                        />
                        <input
                            type="hidden"
                            id="user"
                            name="user"
                            value={user}
                        />
                        <input
                            type="submit"
                            className="ui blue button"
                            value="Publish Thread"
                        />
                    </form>
                )
            }


            {props.threads ?
                generateThreads() :
                <h1>loading...</h1>}
        </div >
    )
}

export default Threads;