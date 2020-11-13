import React from 'react';

import { formatCreatedDate } from '../../utils/helpers';
import Comments from './Comments';



const SingleThread = props => {
    const user = props.thread.user;
    return (
        <div className="ui segment">
            <div className="comment">
                <a className="avatar" href="/">
                    <img src="https://i.pravatar.cc/100" alt="avatar" />
                </a>
                <div className="content">
                    <a className="author" href="/">{user.firstName} {user.lastName}</a>
                    <div className="metadata">
                        <span className="date">{formatCreatedDate(props.thread.createdAt)}</span>
                    </div>
                    <div className="text">
                        {props.thread.content}
                    </div>
                    <br />
                    <div className="replies">
                        {props.thread.comments ?
                            <Comments
                                fetch={props.fetch}
                                comments={props.thread.comments}
                                thread={props.thread._id}
                            /> :
                            <button className="ui mini icon button">
                                <i class="reply icon"></i>
                            </button>
                        }
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SingleThread;


