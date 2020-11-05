import React from 'react';


const SingleComment = props => {
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
                    <a href="/" className="author">{props.comment.user}</a>
                    <div className="metadata">
                        <span className="date">{props.comment.createdAt}</span>
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