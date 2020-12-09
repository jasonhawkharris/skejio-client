import React, { useState, useEffect } from 'react';

import useComments from '../../hooks/useComments';
import Comment from './Comment';

const CommentIndex = props => {
    const thread = props.thread;
    const [comments, fetchComments] = useComments(props.thread._id, true);
    const [loading, setLoading] = useState(true);
    console.log('comments', comments);

    const generateComments = () => {
        return comments.map(comment => {
            return (
                <Comment
                    comment={comment}
                    fetch={() => fetchComments(thread._id, true)}
                />
            );
        });
    }

    useEffect(function () {
        if (!comments) {
            props.fetch()
        } else {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <>
            <div class="comments">
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