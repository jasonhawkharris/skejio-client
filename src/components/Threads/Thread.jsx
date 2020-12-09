import React from 'react';

import DeleteModal from '../Modals/DeleteModal';
import UpdateThread from '../Modals/UpdateThread';
import { formatDate, getTime } from '../../utils/helpers';
import ThreadModel from '../../models/ThreadModel';
import CommentIndex from '../Comments/CommentIndex';

const Thread = props => {
    const author = `${props.thread.author.firstName} ${props.thread.author.lastName}`;
    const date = props.thread.createdAt;
    const content = props.thread.content;

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
                    </div>
                    <br />
                    <CommentIndex thread={props.thread} />
                    <div className="actions">
                        <button className="ui mini pink button">Reply</button>
                        <UpdateThread
                            trigger={
                                <button className="ui mini pink icon button">
                                    <i className="edit icon"></i>
                                </button>
                            }
                            thread={props.thread}
                            fetch={props.fetch}
                        />
                        <DeleteModal
                            trigger={
                                <button className="ui mini pink icon button">
                                    <i className="trash icon"></i>
                                </button>
                            }
                            id={props.thread._id}
                            model={"thread"}
                            modelType={ThreadModel}
                            fetch={props.fetch}
                        />
                    </div>
                </div>
                {/** Comment index goes here. */}

            </div>
        </div>

    )
}

export default Thread;