import axios from 'axios'

const api = axios.create({
    baseURL: 'https://animals-mobile.herokuapp.com'
})

export default api