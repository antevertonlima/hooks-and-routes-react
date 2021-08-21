import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div>
        <h1>Página Inicial</h1>
        <nav>
            <ul>
            <li>
                <Link to="/sobre/oshima">Sobre</Link>
            </li>
            <li>
                <Link to="/usuario">Usuario</Link>
            </li>
            </ul>
        </nav>
        </div>
    );
}