import React from 'react';

import { formatCreatedDate } from '../../utils/helpers';


const SingleComment = props => {
    const user = props.comment.user;
    return (
        <div className="comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="avatar"
                    />
                </a>
                <div className="content">
                    <a href="/" className="author">{user.firstName} {user.lastName}</a>
                    <div className="metadata">
                        <span className="date">{formatCreatedDate(props.comment.createdAt)}</span>
                    </div>
                    <div className="text">
                        {props.comment.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment;