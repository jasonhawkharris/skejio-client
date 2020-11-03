import React from 'react';

const SingleComment = props => {
    console.log('SingleComment props:', props);
    return (
        <div className="comments">
            <div className="comment">
                <a className="avatar">
                    <img src="/images/avatar/small/jenny.jpg" alt="avatar" />
                </a>
                <div className="content">
                    <a className="author">hi</a>
                    <div className="metadata">
                        <span className="date">date</span>
                    </div>
                    <div className="text">
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment;