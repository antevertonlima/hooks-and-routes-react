import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <div>
            <h1>Menu geral</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre/everton">Sobre</Link>
                </li>
                <li>
                    <Link to="/usuario">Usuarios</Link>
                </li>
            </ul>
        </div>
    );
}