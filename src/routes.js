import React from 'react';

/**
 * BrowserRouter -> Define que estamos utilizando as rotas através de um Browser
 * 
 * Switch -> Permite apenas uma rota chamada ao mesmo tempo
 */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

function Routes() {
    return (
        // Colocar em volta de todas as rotas da aplicação
        // exact -> verifica se a rota é exatamente o caminho passado no path
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/products/:id" exact component={Product} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;