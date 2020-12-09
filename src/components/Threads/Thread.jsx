import React, { useEffect } from 'react';

import DeleteModal from '../Modals/DeleteModal';
import UpdateThread from '../Modals/UpdateThread';
import { formatDate, getTime } from '../../utils/helpers';
import ThreadModel from '../../models/ThreadModel';
import CommentIndex from '../Comments/CommentIndex';
import './Threads.css';
import NewComment from '../Comments/NewComment';
import useComments from '../../hooks/useComments';

const Thread = props => {
    const [comments, fetchComments] = useComments(props.thread._id, true);
    const authorName = `${props.thread.author.firstName} ${props.thread.author.lastName}`;
    const date = props.thread.createdAt;
    const currentContent = props.thread.content;

    return (
        <div className="ui segment">
            <div className="comment">
                <div className="avatar">
                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                </div>
                <div className="content">
                    <div className="author">{authorName}</div>
                    <div className="metadata">
                        <span className="date">{formatDate(date, true, true)} at {getTime(date)} </span>
                    </div>
                    <div className="text">
                        {currentContent}
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
                        />
                    </div>
                    <br />
                    <CommentIndex
                        thread={props.thread}
                        fetch={() => fetchComments(props.thread._id)}
                    />
                    <div className="actions">
                        <NewComment
                            thread={props.thread}
                            fetch={() => fetchComments(props.thread._id)}
                        />
                    </div>
                </div>
                {/** Comment index goes here. */}

            </div>
        </div >

    )
}

export default Thread;