import React from 'react';
import { Formik, Field, Form } from 'formik';

import TodoModel from '../../models/TodoModel';
import './Checkbox.css';

const Checkbox = props => {
    return (
        <Formik
            initialValues={{
                completed: props.todo.completed ? true : false,
                createdBy: props.todo.createdBy,
            }}
            onSubmit={async (values) => {
                TodoModel.update(props.todo._id, values)
                    .then(response => {
                        console.log(response);
                        props.fetch()
                    })
            }}
        >
            {({ values }) => (
                <Form>
                    <label>
                        <Field
                            type="checkbox"
                            name="completed"
                            style={{
                                marginLeft: '10px',
                                marginRight: '10px'
                            }} />
                    </label>
                    <button className="ui mini compact icon pink button" type="submit">
                        <i className="send icon"></i>
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default Checkbox;