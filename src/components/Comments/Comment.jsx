import React, { useEffect, useState } from 'react';

import useComments from '../../hooks/useComments';
import DeleteModal from '../Modals/DeleteModal';
import { formatDate, getTime } from '../../utils/helpers';
import CommentModel from '../../models/CommentModel';
import { Loader } from 'semantic-ui-react';

const Comment = props => {
    const [comment] = useComments(props.comment._id);
    const [loading, setLoading] = useState(true);
    const date = formatDate(props.comment.createdAt, true, true);
    const time = getTime(props.comment.createdAt);

    useEffect(function () {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (

        <div className="comment">
            {loading ? (
                <Loader />
            ) : (
                    <>
                        <div className="avatar">
                            <img src="https://i.pravatar.cc/300" alt="avatar" />
                        </div>
                        <div className="content">
                            <div className="author">{comment.author.firstName} {comment.author.lastName}</div>
                            <div className="metadata">
                                <span className="date">{date} at {time}</span>
                            </div>
                            <div className="text">
                                {props.comment.content}
                                <DeleteModal
                                    trigger={
                                        <i className="small trash icon delete-thread"></i>
                                    }
                                    id={comment._id}
                                    model={"comment"}
                                    modelType={CommentModel}
                                    fetch={props.fetch}
                                />
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
}

export default Comment;