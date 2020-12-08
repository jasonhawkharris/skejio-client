import React, { useState } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import TodoModel from '../../models/TodoModel';

const UpdateTodo = props => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(props.todo.content);
    const [dueDate, setDueDate] = useState(props.todo.dueDate);
    const [createdBy] = useState(props.todo.createdBy);
    const data = { content, dueDate, createdBy };

    const handleSubmit = e => {
        e.preventDefault();
        TodoModel.update(props.todo._id, data)
            .then(response => {
                props.fetch();
                setOpen(false);
            });
    }

    return (
        <Modal
            trigger={props.trigger}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
        >
            <Modal.Header>
                <div className="update-tour-header">
                    <h3>Edit Todo</h3>
                    <div><Icon name="remove" onClick={() => setOpen(false)} /></div>
                </div>
            </Modal.Header>
            <Modal.Content>
                <form onSubmit={handleSubmit} className="ui form">
                    <div className="field">
                        <input
                            type="text"
                            name="content"
                            onChange={e => setContent(e.target.value)}
                            value={content}
                            placeholder="What needs doing?"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="date"
                            name="dueDate"
                            onChange={e => setDueDate(e.target.value)}
                            value={dueDate}
                        />
                    </div>
                    <div className="field">
                        <input
                            type="submit"
                            className="ui pink submit button"
                            value="Submit Changes"
                        />
                    </div>
                </form>
            </Modal.Content>
        </Modal >
    )
}

export default UpdateTodo;