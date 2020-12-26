import axios from 'axios'

export const axiosRouteLogued = axios.create({
    baseURL: 'localhost:3001/api/',
    withCredentials: true
})

export const axiosRouteUnlogued = axios.create({
    baseURL: 'localhost:3000/api/',
    withCredentials: false
})