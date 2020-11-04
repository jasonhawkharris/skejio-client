import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import SingleComment from './SingleComment';
import CommentModel from '../../models/CommentModel';
import useComments from '../../hooks/useComments';
import { userState } from '../../recoil/atoms';

const Comments = props => {
    // console.log('Comments props', props);
    const comments = useComments(props.thread)[0];
    // console.log('comments', comments);
    const user = useRecoilValue(userState)._id;
    // console.log('user id:', user)
    const thread = useState(props.thread)[0];
    // console.log('thread id:', thread);
    const [content, setContent] = useState('');
    const commentData = { content, user, thread }
    // console.log(commentData);

    const generateComments = () => {
        return comments.map(comment => {
            return (
                <SingleComment comment={comment} />
            )
        });
    }

    const handleSubmitThread = event => {
        event.preventDefault();
        // console.log(commentData);
        setContent('');
    }

    return (
        <div>
            {comments ?
                generateComments() :
                <h3>loading...</h3>
            }
            <form onSubmit={handleSubmitThread} class="ui reply form">
                <div className="field">
                    <input
                        type="text"
                        className="content-area"
                        name="content"
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <input type="hidden" id="tourDate" name="tourDate" value={thread} />
                <input type="hidden" id="user" name="user" value={user} />
                <input type="submit" className="ui blue labeled submit icon button" />
            </form>
        </div>
    )
}

export default Comments;