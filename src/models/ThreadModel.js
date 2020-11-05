import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/threads';

class ThreadModel {
    static all = async tourDateId => {
        try {
            return await axios.get(`${URL}?tourDate=${tourDateId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.uid}`
                }
            });
        } catch (err) {
            console.log(err);
        }
    }


    static create = (threadData) => {
        return fetch(`${URL}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(threadData),
        }).then(response => response.json())
            .catch(err => console.log(err));
    }
}

export default ThreadModel;