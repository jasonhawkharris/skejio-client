import React from 'react';


import './Nav.css';

const Navigation = props => {
    return (
        <div className="ui inverted vertical pointing menu">
            <a href="/dashboard" className="item">
                Dashboard
            </a>
            <a href="/tours" className="item">
                Tours
            </a>
        </div>
    )
}

export default Navigation;