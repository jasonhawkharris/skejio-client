import React from 'react';
import TodoCard from './TodoCard';

import './Todos.css';

const Todos = (props) => {
    const generateTodoCards = (todos) => {
        return todos.map(todo => {
            return <TodoCard key={todo._id} todo={todo} />
        });
    }

    return (
        <div className="todo-list">
            {generateTodoCards(props.data)}
        </div>
    )
}

export default Todos;