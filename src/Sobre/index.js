import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Sobre(){

    const { nome } = useParams();

    return(
        <div>
            <h1>Sobre {nome}</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}