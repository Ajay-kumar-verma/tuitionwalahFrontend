import axios from 'axios';
import config from '../../config'
const {ENDPOINT} =config ;
console.log({ENDPOINT})

const Token =localStorage.getItem('token');
const token = `Bearer ${Token}`;

const  headers={
    token
 }

  const api = axios.create({
    baseURL: ENDPOINT,
    timeout: 10000,
    headers
  });

//   console.log('Api is ',api);

  export default api;