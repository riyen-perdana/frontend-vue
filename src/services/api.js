//import axios from 'axios'
import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default Api