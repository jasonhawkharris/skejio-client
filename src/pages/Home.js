import React from 'react';
import Nav from '../components/sidebar/Nav';
import Todos from '../components/todos/Todos';

const Home = () => {
    return (
        <div className="main">
            <div>
                <Nav />
            </div>
            <div className="feed">
                <h1>Welcome to skej.io</h1>
            </div>
            <div>
                <Todos />
            </div>
        </div>
    );
}

export default Home;