/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import UserModel from '../../models/UserModel';

import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

import TodoCard from './TodoCard';

import './Todos.css';

const Todos = props => {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function () {
        if (localStorage.uid) {
            UserModel.show().then(response => {
                setUser(response.users)
            });
        }
    }, []);

    const generateTodoCards = (todos) => {
        console.log(props);
        return todos.map(todo => {
            return <TodoCard key={todo._id} todo={todo} />
        });
    }

    return (

        <div className="todo-list">
            {user ?
                generateTodoCards(props.data) :
                <p>You're all caught up!</p>
            }
        </div>
    )
}

export default Todos;