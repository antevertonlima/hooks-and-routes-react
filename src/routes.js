import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './Home';
import Sobre from './Sobre';
import Usuario from './Usuario';

import Header from './components/Header';
import Erro from './Erro';

export default function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={Sobre} path="/sobre/:nome" />
                    <Route component={Usuario} path="/usuario" />

                    <Route component={Erro} path="*" />
            </Switch>
        </BrowserRouter>
    )
}