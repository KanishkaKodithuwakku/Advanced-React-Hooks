import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API;


const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default httpClient;
