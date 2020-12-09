import { useEffect, useState } from 'react';

import CommentModel from '../models/CommentModel';

const useComments = (id, query = false) => {
    const [comments, setComments] = useState(null);

    const fetchComments = (id) => {
        if (!query) {
            CommentModel.show(id).then(response => {
                console.log('using show');
                if (response.msg) setComments([]);
                setComments(response.foundComment);
            });
        } else {
            CommentModel.index(id).then(response => {
                console.log('using index')
                if (response.msg) setComments([]);
                setComments(response.foundComments);
            });
        }
    }

    useEffect(
        function () {
            fetchComments(id)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    return [comments, fetchComments];
}

export default useComments;