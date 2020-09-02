import axios from 'axios';

// Todas as requisições partirão dessa URL(Nossa base de requisições)
const api = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default api;