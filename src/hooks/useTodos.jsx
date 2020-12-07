import { useState, useEffect } from 'react';

import TodoModel from '../models/TodoModel';

const useTodos = (id) => {
    const [todos, setTodos] = useState(null);

    const fetchTodos = (id) => {
        if (id) {
            TodoModel.show(id).then(response => {
                if (response.msg) setTodos([]);
                setTodos(response.foundTodo)
            });
        } else {
            TodoModel.all().then(response => {
                if (response.msg) setTodos([]);
                setTodos(response.foundTodos);
            });
        }
    }

    useEffect(
        function () {
            fetchTodos(id)
        }, []
    );

    return [todos, fetchTodos];
}

export default useTodos;