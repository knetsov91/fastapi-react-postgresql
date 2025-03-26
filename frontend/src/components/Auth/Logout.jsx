import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"

const Logout = () => {
    const {setToken} = useAuth();
    setToken(null)
    localStorage.removeItem("authToken")
    const navigate = useNavigate()
    navigate("/")
}

export default Logout;