/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import TodoModel from '../../models/TodoModel';

import { addTodoBtnState } from '../../recoil/atoms';
import TodoCard from './TodoCard';
import TourDatesMenu from './TourDatesMenu';
import './Todos.css';




const Todos = props => {
    const [addTodoBtnClicked, setAddTodoBtnClicked] = useRecoilState(addTodoBtnState);
    const [content, setContent] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [tourDate, setTourDates] = useState('');
    const todoData = { content, dueDate, tourDate }

    const generateTodoCards = (todos) => {
        return todos.map(todo => {
            return <TodoCard key={todo._id} todo={todo} />
        });
    }

    const toggleTodoBtnClicked = () => {
        addTodoBtnClicked ? setAddTodoBtnClicked(false) : setAddTodoBtnClicked(true);
    }

    const handleSubmittedTodo = (event) => {
        event.preventDefault();
        console.log(todoData);
        TodoModel.create(todoData);
        toggleTodoBtnClicked();
    }

    return (
        <div className="todo-list">
            {generateTodoCards(props.data)}
            {addTodoBtnClicked ?
                <form className="ui form" onSubmit={handleSubmittedTodo}>
                    <input type="text" name="content" onChange={e => setContent(e.target.value)} />
                    <input type="date" name="dueDate" onChange={e => setDueDate(e.target.value)} />
                    <TourDatesMenu setTourDate={setTourDates} />
                    <input type="submit" className="ui button" value="submit" />
                </form> :
                <button id="add-todo" className="ui button" onClick={toggleTodoBtnClicked}>Add</button>
            }
        </div>
    )
}

export default Todos;