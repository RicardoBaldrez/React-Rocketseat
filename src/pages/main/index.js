import React, { Component } from 'react';

import api from "../../services/api";

import './styles.css';

export default class Main extends Component {
    // Criando o armazenamento em estado
    state = {
        products: [],
    };

    // Método que é executado assim que o componente é mostrado em tela
    // Então se precisar executar uma ação logo que o componente é exibido em tela utilizar 'componentDidMount()'
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/products");
        
        // Setando o retorno no estado definido à cima
        this.setState({
            products: response.data.docs
        });
    };

    render() {
        // Buscando a variável products do nosso state
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map((product) => (
                    // Sempre que faz um map, o react pede para que no primeiro elemento seja adicionado uma key com o valor único para cada item da iteração
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}