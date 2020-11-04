import React from 'react';

import Comments from './Comments';

const SingleThread = props => {
    // const [replyBtn, setReplyBtn] = useState('');

    // const toggleReplyBtn = event => {
    //     if (replyBtn) {
    //         setReplyBtn(false);
    //     } else {
    //         setReplyBtn(true);
    //     }
    // }

    return (
        <div className="ui segment">
            <div className="comment">
                <a className="avatar" href="/">
                    <img src="https://i.pravatar.cc/100" alt="avatar" />
                </a>
                <div className="content">
                    <a className="author" href="/">UserID: {props.thread.user}</a>
                    <div className="metadata">
                        <span className="date">{props.thread.createdAt}</span>
                    </div>
                    <div className="text">
                        {props.thread.content}
                    </div>
                    <br />
                    <div className="replies">
                        {props.thread.comments ?
                            <Comments fetch={props.fetch} comments={props.thread.comments} thread={props.thread._id} /> :
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


