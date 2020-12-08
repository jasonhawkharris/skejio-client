import React, { useState, useEffect } from 'react';

import useThreads from '../../hooks/useThreads';
import Thread from './Thread';
import NewThread from './NewThread';

const ThreadIndex = props => {
    const tourdate = props.tourdate;
    const [threads, fetchThreads] = useThreads(tourdate._id, true);
    const [loading, setLoading] = useState(true);

    const generateThreads = () => {
        return threads.map(thread => {
            return (
                <Thread
                    thread={thread}
                    fetch={() => fetchThreads(tourdate._id, true)}

                />
            )
        })
    }

    useEffect(function () {
        if (loading) {
            fetchThreads(tourdate._id, true);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="ui threaded comments">
            <h3 className="ui dividing header">Discussion</h3>
            {threads ? (
                <>
                    {!loading ? (
                        generateThreads()
                    ) : (
                            <div className="ui segment">
                                <p></p>
                                <div className="ui active dimmer">
                                    <div className="ui loader"></div>
                                </div>
                            </div>
                        )}
                </>
            ) : (
                    <div className="ui segment">
                        <p>No threads to display.</p>
                    </div>
                )}
            <NewThread
                tourdate={tourdate}
                fetch={() => fetchThreads(tourdate._id, true)}
            />
        </div>
    )
}

export default ThreadIndex;