import React from 'react';

import Routes from '../config/Routes';
import Nav from '../components/sidebar/Nav';
import Todos from '../components/todos/Todos';

const Home = () => {
    return (
        <div className="main">
            <div>
                <Nav />
            </div>
            <div className="feed">
                <Routes />
            </div>
            <div>
                <Todos />
            </div>
        </div>
    );
}

export default Home;