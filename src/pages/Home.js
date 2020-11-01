import React from 'react';

import Routes from '../config/Routes';
import Nav from '../components/sidebar/Nav';
import Todos from '../components/todos/Todos';
import useTodos from '../hooks/useTodos';

const Home = () => {
    const [todos, fetchTodos] = useTodos();

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
                <button className="ui button" onClick={fetchTodos}>Refresh</button>
                {todos.length ?
                    <Todos data={todos} /> :
                    <p>No todos</p>
                }

            </div>
        </div>
    );
}

export default Home;