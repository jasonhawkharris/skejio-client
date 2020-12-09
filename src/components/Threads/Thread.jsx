import React from 'react';

import DeleteModal from '../Modals/DeleteModal';
import UpdateThread from '../Modals/UpdateThread';
import { formatDate, getTime } from '../../utils/helpers';
import ThreadModel from '../../models/ThreadModel';
import CommentIndex from '../Comments/CommentIndex';
import './Threads.css';
import useComments from '../../hooks/useComments';

const Thread = props => {
    const [comments, fetchComments] = useComments(props.thread._id);
    const author = `${props.thread.author.firstName} ${props.thread.author.lastName}`;
    const date = props.thread.createdAt;
    const content = props.thread.content;

    console.log('comments', comments);

    return (
        <div className="ui segment">
            <div className="comment">
                <div className="avatar">
                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                </div>
                <div className="content">
                    <div className="author">{author}</div>
                    <div className="metadata">
                        <span className="date">{formatDate(date, true, true)} at {getTime(date)} </span>
                    </div>
                    <div className="text">
                        {content}
                        <UpdateThread
                            trigger={
                                <i className="edit icon edit-thread"></i>
                            }
                            thread={props.thread}
                            fetch={props.fetch}
                        />
                        <DeleteModal
                            trigger={
                                <i className="trash icon delete-thread"></i>
                            }
                            id={props.thread._id}
                            model={"thread"}
                            modelType={ThreadModel}
                            fetch={props.fetch}
                            fetchComments={() => fetchComments(props.thread._id)}
                        />
                    </div>
                    <div className="thread-actions">

                    </div>
                    <br />
                    <CommentIndex thread={props.thread} />
                    <div className="actions">
                        <button className="ui mini pink button">Reply</button>

                    </div>
                </div>
                {/** Comment index goes here. */}

            </div>
        </div>

    )
}

export default Thread;