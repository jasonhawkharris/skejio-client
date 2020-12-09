const URL = 'http://localhost:3001/api/v1/comments';

class CommentModel {
    static show = async (thread) => {
        try {
            const response = await fetch(`${URL}/${thread}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                }
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static create = async (data) => {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static update = async (id, data) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static destroy = async (id) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default CommentModel;