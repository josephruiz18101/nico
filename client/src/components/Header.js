import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/examples">Example Pages</Link></li>
                    <li><Link to="/comments">Comments</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
