import React from 'react';

const TodoCard = props => {
    const { tourDate, content, completed } = props.todo;
    return (
        <div className="ui raised segment">
            <div className="card">
                <div className="content">
                    <div className="header">
                        {tourDate}
                    </div>
                    <div className="description">
                        {content}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui checkbox">
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
        </div>

    )
}

export default TodoCard;