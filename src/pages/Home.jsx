import React from 'react';

import Routes from '../config/Routes';

const Home = props => {
    // if logged in, show full spread with routes.
    // if not logged in, only show login page with a link to the register page.
    return (
        <div>
            <div>
                <Routes />
            </div>
        </div>

    )
}

export default Home;