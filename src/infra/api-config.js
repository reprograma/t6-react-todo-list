import axios from 'axios'
import { getUser } from './local-storage'

// axios.create( {
//     baseUrl : 'https://lehtodoapi.herokuapp.com/',
//     timeout: 5000,
// }).get('/ping')
const config = {
    baseURL : 'https://lehtodoapi.herokuapp.com/',
    timeout: 5000,
    headers: ''
}

function api(){
    const user = getUser()
    if(user){
        config.headers = {
            user : user
        }
    }
    return axios.create(config)
 }

export function startServer(){
    const url ='/ping'

    return api().get(url)
}

export default api

