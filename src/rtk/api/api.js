import axios from 'axios';
import config from '../../config'
const {ENDPOINT} =config ;


const timeout=30000;
const baseURL=ENDPOINT;

const api =()=>{
const token = `Bearer ${localStorage.getItem('token')}`;
const  headers={token}
 return axios.create({
      baseURL,
      timeout,
      headers
    });

}

  export default api;