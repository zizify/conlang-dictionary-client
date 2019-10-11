import React from 'react';
import { Link } from '@reach/router';

import '../css/Header.css';

export default function Header(props) {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav-logo">
                    <Link className="no-link header-nav-logo-name" to="/">Lexika</Link>
                </div>
                <ul className="header-nav-list">
                    <li className="header-nav-link">
                        <Link className="no-link" to="/">
                            <i className="fas fa-home" />
                            <span className="header-nav-link-name">&ensp;Home</span>
                        </Link>
                    </li>
                    <li className="header-nav-link">
                        <Link className="no-link" to="/words">
                            <i className="fas fa-book" />
                            <span className="header-nav-link-name">&ensp;Words</span>
                        </Link>
                    </li>
                    <li className="header-nav-link">
                        <Link className="no-link" to="/search">
                            <i className="fas fa-search" />
                            <span className="header-nav-link-name">&ensp;Search</span>
                        </Link>
                    </li>
                    <li className="header-nav-link">
                        <Link className="no-link" to="/settings">
                            <i className="fas fa-cog" />                      
                            <span className="header-nav-link-name">&ensp;Settings</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}