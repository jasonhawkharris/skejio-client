import React, { useEffect } from 'react';

import Routes from '../config/Routes';
import Nav from '../components/sidebar/Nav';
import Todos from '../components/todos/Todos';
import useTodos from '../hooks/useTodos';

const Home = () => {
    const [todos, fetchTodos] = useTodos();

    // useEffect(function () {
    //     fetchTodos();
    // }, [todos])

    return (
        <div className="main">
            <div>
                <Nav />
            </div>
            <div className="feed">
                <Routes />
            </div>
            <div className="todos">
                <h1>My Todo-List</h1>
                {todos.length ?
                    <Todos data={todos} /> :
                    <p>loading...</p>
                }
            </div>
        </div>
    );
}

export default Home;