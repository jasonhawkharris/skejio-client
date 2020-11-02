const URL = 'http://localhost:3001/api/v1/todos';

class TodoModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (todoId) => {
        return fetch(`${URL}/${todoId}`).then(response => response.json());
    }

    static create = (todoData) => {
        return fetch(`${URL}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(todoData),
        }).then(response => response.json());
    };

    static edit = (todoId, todoData) => {
        return fetch(`${URL}/${todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoData),
        }).then(response => response.json());
    }
}

export default TodoModel;