// Located at: C:\Users\user\Projects\notion-frontend\src\app\components\Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                {/* Add other navigation links here */}
            </ul>
        </nav>
    );
};

export default Sidebar;
