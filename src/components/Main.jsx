import React from 'react';

import '../css/Main.css';

export default function Main(props) {
    const { children } = props;

    return (
        <div className="main-page">
            {children}
        </div>
    )
}