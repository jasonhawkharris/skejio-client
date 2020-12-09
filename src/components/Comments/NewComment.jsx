import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from '../../recoil/atoms';
import CommentModel from '../../models/CommentModel';

const NewComment = props => {
    const [replyClicked, setReplyClicked] = useState(false);
    const [content, setContent] = useState('');
    const author = useRecoilValue(userState)._id;
    const thread = props.thread._id;
    const data = { content, author, thread }

    const handleSubmit = event => {
        event.preventDefault();
        CommentModel.create(data)
            .then(response => {
                props.fetch();
                setContent('');
                setReplyClicked(false);
            }).catch(err => {
                console.log('Unable to create comment');
                console.log(err);
            });
    }

    return (
        <>
            {replyClicked ? (
                <>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="field">
                            <input
                                type="text"
                                name="content"
                                onChange={e => setContent(e.target.value)}
                                value={content}
                                placeholder="Type your comment here."
                            />
                        </div>
                        <div className="field">
                            <button
                                className="ui mini pink button"
                                onClick={() => {
                                    setContent('');
                                    setReplyClicked(false)
                                }}
                            >Cancel</button>
                            <button
                                className="ui mini pink button"
                                type="submit"
                            >Post</button>
                        </div>
                    </form>
                </>
            ) : (
                    <button
                        className="ui mini pink button"
                        onClick={() => setReplyClicked(true)}
                    >
                        Reply
                    </button>
                )}
        </>
    )
}

export default NewComment;