import { useContext } from "react";
import {useAuth } from '../context/authContext';
import { Navigate, Outlet, replace, useNavigate } from "react-router-dom";
import Login from "./Auth/Login";
 

const ProtectedRoute = ({children}) => {
    const {authToken} = useAuth();
    const navigate = useNavigate();
    if (!authToken) {
        console.log("Not authenticated")
      return <Navigate to="/login" replace={true} />
    }

    return children;
}

export default ProtectedRoute;