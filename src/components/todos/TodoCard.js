import React from 'react';

const TodoCard = props => {
    const { tourDate, content, dueDate, completed, createdAt } = props.todo;
    return (
        <div class="card">
            <div class="content">
                <div class="header">
                    {tourDate}
                </div>
                <div class="meta">
                    <ul>
                        <li>Created: {createdAt}</li>
                        <li>Due: {dueDate}</li>
                    </ul>
                </div>
                <div class="description">
                    {content}
                </div>

            </div>
            <div class="extra content">
                <div class="ui checkbox">
                    {completed ? (
                        <input type="checkbox" name="completed" checked />
                    ) : (
                            <input type="checkbox" name="completed" />
                        )
                    }
                    <label>Done</label>
                </div>
            </div>
        </div>
    )
}

export default TodoCard;