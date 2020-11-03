import React from 'react';

const Threads = props => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Threads</h3>
            <div className="comment">
                <a className="avatar" href="/">
                    <img src="/images/avatar/small/matt.jpg" alt="avatar" />
                </a>
                <div className="content">
                    <a className="author" href="/">Matt</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                    <div className="actions">
                        <a href="/" className="reply">Reply</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Threads;