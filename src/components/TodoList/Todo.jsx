import React from 'react';

import { formatDate } from '../../utils/helpers';
import './TodoList.css';

const Todo = props => {
    const todo = props.todo;

    return (
        <div className="ui inverted segment">
            <div className="item">
                <strong>Todo: </strong>{todo.content}
            </div>
            <div className="item">
                <strong>Due By: </strong>{formatDate(todo.dueDate, true, true)}
            </div>
            <div className="item">
                <strong>Created By: </strong>{todo.createdBy.firstName} {todo.createdBy.lastName}
            </div>
            <div className="item">
                {/**The check box for completion must go here. */}
            </div>
            <div className="ui inverted mini basic icon buttons" style={{ marginTop: '20px' }}>
                <button className="ui button">
                    <i className="edit icon"></i>
                </button>
                <button className="ui button">
                    <i className="trash icon"></i>
                </button>
            </div>
        </div >
    )
}

export default Todo;