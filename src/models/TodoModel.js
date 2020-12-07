const URL = 'http://localhost:3001/api/v1/todos';

class TodoModel {
    static all = async () => {
        try {
            const res = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                }
            });
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    static show = async (id) => {
        try {
            const res = await fetch(`${URL}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                }
            });
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    static create = async (data) => {
        try {
            const res = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                },
                body: JSON.stringify(data),
            });
            return await res.json()
        } catch (error) {
            console.error(error);
        }
    }

    static update = async (id, data) => {
        try {
            const res = await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                },
                body: JSON.stringify(data),
            });
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    static destroy = async (id) => {
        try {
            const res = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                }
            });
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default TodoModel;