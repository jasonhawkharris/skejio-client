import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/comments';

class CommentModel {
    static all = async threadId => {
        try {
            return await axios.get(`${URL}?thread=${threadId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.uid}`
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    static create = (commentData) => {
        return fetch(`${URL}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(commentData),
        }).then(response => response.json())
            .catch(err => console.log(err));
    }
}

export default CommentModel;