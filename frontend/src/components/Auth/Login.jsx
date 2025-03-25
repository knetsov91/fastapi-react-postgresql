import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault();

        login(email, password)
        .then(data => {
            console.log(data);
            navigate("/home")
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