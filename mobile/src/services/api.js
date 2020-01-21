import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://r4-qj5.anonymous.mobile.exp.direct:3333',
    //baseURL:  'http://localhost:3333' //não retorna o erro mas não realiza a busca
    baseURL: 'http://192.168.0.114:3333'
    //baseURL: 'http://192.168.54.1:3333'
    //baseURL: 'http://r4-qj5.anonymous.mobile.exp.direct:3333'
    //baseURL: 'http://127.0.0.1:3333' //deu erro antes de apertar o botao
});

export default api;