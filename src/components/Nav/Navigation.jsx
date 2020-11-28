import React from 'react';


import './Nav.css';
import 'semantic-ui-css/semantic.min.css'

const Navigation = props => {
    return (
        <div className="ui inverted fixed vertical pointing menu">
            <a href="/dashboard" className="item">
                Dashboard
            </a>
            <a href="/profile" className="item">
                Profile
            </a>
            <a href="/tours" className="item">
                Tours
            </a>
            <a href="/team" className="item">
                Team
            </a>
        </div>
    )
}

export default Navigation;