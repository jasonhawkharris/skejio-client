import { useState, useEffect } from 'react';
import TodoModel from '../models/TodoModel';

const useTodos = todoId => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = (id) => {
        if (id) {
            TodoModel.show(id).then(data => {
                setTodos(data.todo)
            });
        } else {
            TodoModel.all().then(data => {
                setTodos(data.todos);
            });
        }
    }

    useEffect(
        function () {
            fetchTodos(todoId)
        },
        [todoId]
    );

    return [todos, fetchTodos];
}

export default useTodos;