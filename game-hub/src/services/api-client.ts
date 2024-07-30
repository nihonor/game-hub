import axios from 'axios';
 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'8f138fab6a6341af9635c957e9a19e50'
    }
})