import React, { Component } from 'react';

import api from "../../services/api";

export default class Main extends Component {
    // Método que é executado assim que o componente é mostrado em tela
    // Então se precisar executar uma ação logo que o componente é exibido em tela utilizar 'componentDidMount()'
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/products");
        console.log(response.data.docs);
    };

    render() {
        return <h1>Hello</h1>
    }
}