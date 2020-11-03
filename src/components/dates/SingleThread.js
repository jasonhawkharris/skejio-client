import React from 'react';

import Comments from './Comments';

const SingleThread = props => {
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img src="/images/avatar/small/matt.jpg" alt="avatar" />
            </a>
            <div className="content">
                <a className="author" href="/">UserID: {props.thread.user}</a>
                <div className="metadata">
                    <span className="date">{props.thread.createdAt}</span>
                </div>
                <div className="text">
                    {props.thread.content}
                </div>

                <div className="actions">
                    <a href="/" className="reply">Reply</a>
                </div>

                <div className="replies">
                    {props.thread.comments.length ?
                        <Comments comments={props.thread.comments} thread={props.thread._id} /> :
                        <p>Be the first to reply on this post.</p>
                    }
                </div>
            </div>
        </div >
    )
}

export default SingleThread;


