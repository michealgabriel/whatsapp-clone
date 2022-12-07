 
 import axios from 'axios';

 const instance = axios.create({
    baseURL: "https://whatsapp-clone-backend.onrender.com",
    headers: {
       'Access-Control-Allow-Origin': '*',
    }
 });
 export default instance;