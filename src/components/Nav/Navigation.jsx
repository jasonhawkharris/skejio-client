import React, { useState } from 'react';

import './Nav.css';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Navigation = props => {
    const history = useHistory();
    const [activeItem, setActiveItem] = useState('dashboard');

    const handleItemClick = async (e, { name }) => {
        setActiveItem(name);
        history.push(`/${name}`);
    }

    return (
        <Menu
            className="ui inverted fixed vertical pointing">
            <Menu.Item
                name='dashboard'
                active={activeItem === 'dashboard'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='profile'
                active={activeItem === 'profile'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='tours'
                active={activeItem === 'tours'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='tourdates'
                active={activeItem === 'tourdates'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='team'
                active={activeItem === 'team'}
                onClick={handleItemClick}
            />
        </Menu>
    )
}

export default Navigation;