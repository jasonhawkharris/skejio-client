import React from 'react';

import { formatDate, getTime } from '../../utils/helpers';

const Comment = props => {
    const author = props.comment.author;
    const name = `${author.firstName} ${author.lastName}`;
    const date = formatDate(props.comment.createdAt, true, true);
    const time = getTime(props.comment.createdAt);

    return (
        <div className="comment">
            <div className="avatar">
                <img src="https://i.pravatar.cc/300" alt="avatar" />
            </div>
            <div className="content">
                <div className="author">{name}</div>
                <div className="metadata">
                    <span className="date">{date} at {time}</span>
                </div>
                <div className="text">
                    {props.comment.content}
                </div>
            </div>
        </div>
    );
}

export default Comment;