import React, { useEffect, useState } from 'react';
import TodoModel from '../../models/TodoModel';

import { formatDate } from '../../utils/helpers';
import DeleteModal from '../Modals/DeleteModal';
import UpdateTodo from '../Modals/UpdateTodo';
import Checkbox from './Checkbox';
import './TodoList.css';

const Todo = props => {
    const todo = props.todo;
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="ui inverted segment">
            {!loading ? (
                <>
                    <div className="item">
                        <strong>Todo: </strong>{todo.content}
                    </div>
                    <div className="item">
                        <strong>Due By: </strong>{formatDate(todo.dueDate, true, true)}
                    </div>
                    <div className="item">
                        <strong>Created By: </strong>{todo.createdBy.firstName} {todo.createdBy.lastName}
                    </div>
                    <div className="item check">
                        {/**The check box for completion must go here. */}
                        <strong>Completed:</strong><Checkbox todo={todo} fetch={props.fetch} />
                    </div>
                    <div className="ui inverted mini basic icon buttons" style={{ marginTop: '20px' }}>
                        <UpdateTodo
                            trigger={
                                <button className="ui button">
                                    <i className="edit icon"></i>
                                </button>
                            }
                            todo={todo}
                            fetch={props.fetch}
                        />
                        <DeleteModal
                            trigger={
                                <button className="ui button">
                                    <i className="trash icon"></i>
                                </button>
                            }
                            id={todo._id}
                            model={"todo"}
                            modelType={TodoModel}
                            fetch={props.fetch}
                        />
                    </div>
                </>
            ) : (
                    <div class="ui segment">
                        <p></p>
                        <div class="ui active dimmer">
                            <div class="ui loader"></div>
                        </div>
                    </div>
                )}
        </div >
    )
}

export default Todo;