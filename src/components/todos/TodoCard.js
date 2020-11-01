import React from 'react';

import './Todos.css';

const TodoCard = props => {
    const { content, completed } = props.todo;

    return (
        <div className="single-todo">
            <div className="ui checkbox">
                {completed ? (
                    <input type="checkbox" name="completed" checked />
                ) : (
                        <input type="checkbox" name="completed" />
                    )
                }
                <label>{content}</label>
            </div>
        </div>
    )
}

export default TodoCard;