import axios from 'axios'

const api = axios.create({
    baseURL: "https://637c1a9172f3ce38ea9aec32.mockapi.io/api"
    
})

export default api