import React from 'react';

import Todo from './Todo';

import useTodos from '../../hooks/useTodos';
import './TodoList.css';

const TodoListIndex = props => {
    const [todos, fetchTodos] = useTodos();


    const generateTodos = () => {
        let index = 0;
        return todos.map(todo => {
            index++
            return (
                <>
                    <div className="ui divider"></div>
                    <Todo
                        key={index}
                        todo={todo}
                        fetch={() => fetchTodos()}
                    />
                </>
            )
        })
    }

    return (
        <div className="ui inverted segment todo-list-index">
            <h3>To Do List</h3>
            <div>
                {todos &&
                    generateTodos()
                }

            </div>
        </div>
    )
}

export default TodoListIndex;