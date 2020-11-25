import React from 'react';

const BasicNav = props => {

    const logout = () => {
        localStorage.clear();
        window.location.replace('/login');
    }

    return (
        <div className="ui secondary menu">
            <div className="item">
                <h3>Skej.io</h3>
            </div>
            <div className="right menu">
                <div className="ui item">
                    <button className="ui black button" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasicNav;