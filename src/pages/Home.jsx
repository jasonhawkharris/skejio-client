import React from 'react';

import Routes from '../config/routes';

const Home = props => {
    // if logged in, show full spread with routes.
    // if not logged in, only show login page with a link to the register page.
    return (
        <div>
            <Routes />
        </div>

    )
}

export default Home;