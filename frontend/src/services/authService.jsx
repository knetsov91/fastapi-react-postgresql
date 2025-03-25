import axios from 'axios';

export const register = (email, password) => {
    axios.post("http://localhost:8000/register", {email, password})
    .then(data => {
        console.log(data);
        
    })
    .catch(err => console.log(err))
};

