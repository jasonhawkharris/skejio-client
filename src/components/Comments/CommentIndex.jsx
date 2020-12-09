import React, { useState, useEffect } from 'react';

import Comment from './Comment';

const CommentIndex = props => {
    const [loading, setLoading] = useState(true);

    const generateComments = () => {
        let index = -1;
        return props.thread.comments.map(comment => {
            index++;
            return (
                <Comment
                    key={index}
                    comment={comment}
                    fetch={props.fetch}
                />
            );
        });
    }

    useEffect(function () {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="comments">
                {!loading ? (
                    generateComments()
                ) : (
                        <div className="ui segment">
                            <p></p>
                            <div className="ui active inverted dimmer">
                                <div className="ui loader"></div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}

export default CommentIndex;