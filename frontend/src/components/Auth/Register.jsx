import { useEffect, useState } from "react";
import {register} from "../../services/authService"
const Register = () => {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        register(email, password)
     
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <button>Register</button>
            </form>

        </div>
    );
}

export default Register