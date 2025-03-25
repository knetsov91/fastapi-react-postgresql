import axios from "axios"
const BACKEND_URL = "http://localhost:8000"; 

export const getUsers = () => {
    return axios.get(`${BACKEND_URL}/users`)
}