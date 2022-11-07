import axios from 'axios';

const ENDPOINT = 'https://twserver.herokuapp.com';
// const ENDPOINT = 'http://localhost:3001';
 
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