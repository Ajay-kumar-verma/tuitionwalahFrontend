import axios from 'axios';
import config from '../../config'
const {ENDPOINT} =config ;

// console.log({ENDPOINT})

const Token =localStorage.getItem('token');
const token = `Bearer ${Token}`;

const baseURL=ENDPOINT;
const timeout=10000;
const  headers={token}

  const api = axios.create({
    baseURL,
    timeout,
    headers
  });

  export default api;