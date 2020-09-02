import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    // Criando o armazenamento em estado
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    // Método que é executado assim que o componente é mostrado em tela
    // Então se precisar executar uma ação logo que o componente é exibido em tela utilizar 'componentDidMount()'
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        // Criando duas variáveis, 1 armazenando o que tem dentro do docs vindo da requisição, e a segunda armazena todo resto
        const { 
            docs, 
            ...productInfo 
        } = response.data;

        // Setando o retorno no estado definido à cima
        this.setState({
            products: docs,
            productInfo,
            page
        });
    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        // Verificando se já estamos na última página
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        // Buscando a variável products do nosso state
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map((product) => (
                    // Sempre que faz um map, o react pede para que no primeiro elemento seja adicionado uma key com o valor único 
                    // para cada item da iteração
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}