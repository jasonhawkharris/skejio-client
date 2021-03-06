import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import SingleComment from './SingleComment';
import CommentModel from '../../models/CommentModel';
import { userState } from '../../recoil/atoms';

const Comments = props => {
    const user = useRecoilValue(userState)._id;
    const thread = useState(props.thread)[0];
    const [content, setContent] = useState('');
    const [replyBtn, setReplyBtn] = useState(false);
    const commentData = { content, user, thread }



    const generateComments = () => {
        return props.comments.map(comment => {
            return (
                <SingleComment comment={comment} />
            )
        });
    }



    const toggleReplyBtn = event => {
        if (replyBtn) {
            setReplyBtn(false);
        } else {
            setReplyBtn(true);
        }
    }



    const handleSubmitThread = event => {
        event.preventDefault();
        CommentModel.create(commentData)
            .then(response => props.fetch());
        toggleReplyBtn();
    }



    return (
        <div>
            {props.comments ?
                generateComments() :
                <h3>loading...</h3>
            }

            {!replyBtn ?
                <form className="reply-field" onSubmit={handleSubmitThread} class="ui reply form">
                    <div className="ui mini fluid input">
                        <input
                            type="text"
                            className="ui mini input"
                            name="content"
                            onChange={e => setContent(e.target.value)}
                        />
                    </div>
                    <input
                        type="hidden"
                        id="tourDate"
                        name="tourDate"
                        value={thread}
                    />
                    <input
                        type="hidden"
                        id="user"
                        name="user"
                        value={user}
                    />
                    <input
                        type="submit"
                        className="ui mini blue icon button"
                    />
                    <button
                        id="cancel-btn"
                        onClick={toggleReplyBtn}
                        className="ui mini icon button">
                        <i class="trash alternate outline icon"></i>
                    </button>
                </form> :
                <button
                    id="reply-btn"
                    onClick={toggleReplyBtn}
                    className="ui mini icon button">
                    Reply
                </button>
            }
        </div>
    )
}

export default Comments;