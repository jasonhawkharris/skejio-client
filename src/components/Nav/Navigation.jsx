import React, { useState } from 'react';

import './Nav.css';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Navigation = props => {
    const history = useHistory();
    const [activeItem, setActiveItem] = useState('dashboard');
    const [endpoint, setEndPoint] = useState('/dashboard');

    const handleItemClick = async (e, { name }) => {
        setActiveItem(name);
        history.push(`/${name}`);
    }

    return (
        <Menu inverted pointing vertical>
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

// class Navigation extends React.Component {
//     state = { activeItem: 'dashboard' };

//     handleItemClick = (e, { name }) => {
//         this.setState({ activeItem: name })
//     };

//     render() {
//         const { activeItem } = this.state;

//         return (
//             <Menu inverted pointing vertical>
//                 <Menu.Item
//                     name='dashboard'
//                     active={activeItem === 'dashboard'}
//                     href='/dashboard'
//                     onClick={this.handleItemClick}
//                 />
//                 <Menu.Item
//                     name='profile'
//                     active={activeItem === 'profile'}
//                     onClick={this.handleItemClick}
//                     href='/profile'
//                 />
//                 <Menu.Item
//                     name='tours'
//                     active={activeItem === 'tours'}
//                     onClick={this.handleItemClick}
//                     href='/tours'
//                 />
//                 <Menu.Item
//                     name='tourdates'
//                     active={activeItem === 'tourdates'}
//                     onClick={this.handleItemClick}
//                     href='/alltourdates'
//                 />
//                 <Menu.Item
//                     name='team'
//                     active={activeItem === 'team'}
//                     onClick={this.handleItemClick}
//                     href='/team'
//                 />
//             </Menu>
//         )
//     }
// }

// const Navigation = props => {
//     return (
//         <div className="ui inverted fixed vertical pointing menu">
//             <a href="/dashboard" className="item">
//                 Dashboard
//             </a>
//             <a href="/profile" className="item">
//                 Profile
//             </a>
//             <a href="/tours" className="item">
//                 Tours
//             </a>
//             <a href="/alltourdates" className="item">
//                 Tourdates
//             </a>
//             <a href="/team" className="item">
//                 Team
//             </a>
//         </div>
//     )
// }

export default Navigation;