import axios from 'axios';
const BACKEND_URL = "http://localhost:8000"; 

export const register = (email, password) => {
    axios.post(`${BACKEND_URL}/register`, {email, password})
    .then(data => {
        console.log(data);
        
    })
    .catch(err => console.log(err))
};

export const login = (email, password) => {

    return axios.post(`${BACKEND_URL}/login`, {email, password});
} 

