import { useEffect, useState } from 'react';

import CommentModel from '../models/CommentModel';

const useComments = (threadId) => {
    const [comments, setComments] = useState(null);

    const fetchComments = () => {
        CommentModel.show(threadId).then(response => {
            if (response.msg) setComments([]);
            setComments(response.foundComments);
        });
    }

    useEffect(
        function () {
            fetchComments()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    return [comments, fetchComments];
}

export default useComments;