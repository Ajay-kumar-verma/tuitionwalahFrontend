import axios from 'axios';
import config from '../../config'
const {ENDPOINT} =config ;

const token = `Bearer ${localStorage.getItem('token')}`;

const baseURL=ENDPOINT;
const timeout=10000;
const  headers={token}

 const api =axios.create({
      baseURL,
      timeout,
      headers
    });
  


  export default api;