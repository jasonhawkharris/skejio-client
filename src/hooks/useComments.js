import { useState, useEffect } from 'react';
import CommentModel from '../models/CommentModel';

const useComments = threadId => {
    const [comments, setComments] = useState(null);

    const fetchComments = (threadId) => {
        CommentModel.all(threadId).then(response => {
            setComments(response.data.comment);
        });
    }

    useEffect(
        function () {
            fetchComments(threadId)
        },
        [threadId]
    );

    return [comments, fetchComments];
}

export default useComments;