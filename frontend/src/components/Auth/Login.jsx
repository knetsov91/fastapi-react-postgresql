import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {setToken} = useAuth()
    
    const submit = (e) => {
        e.preventDefault();

        login(email, password)
        .then(data => {
            console.log(data);
            const {token} = data.data;
            setToken(token)
            localStorage.setItem("authToken", token)
            navigate("/home", {replace: true})
        })
        .catch(err => {
            console.log(err);
            setError("error")    
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}> 
                <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="email" onChange={e => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>

            {error && <h1>{error}</h1>}
        </div>
    );
}

export default Login