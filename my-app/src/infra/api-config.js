import axios from 'axios'


// axios.create( {
//     baseUrl : 'https://lehtodoapi.herokuapp.com/',
//     timeout: 5000,
// }).get('/ping')
const config = {
    baseURL : 'https://lehtodoapi.herokuapp.com/',
    timeout: 5000,
}

function api(){
    return axios.create(config)
 }

export function startServer(){
    const url ='/ping'

    return api().get(url)
}

export default api

