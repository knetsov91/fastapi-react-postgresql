import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"))

    const setToken = (token) => setAuthToken(token)
    useEffect(() => {
        console.log("Efect");
        
        if (authToken) {
            localStorage.setItem("authToken", authToken)
            axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`
        } else {
            localStorage.removeItem("authToken")
            delete axios.defaults.headers.common["Authorization"]
        }
    },
    [authToken])
    const authMemo = useMemo(() => ({
        authToken,
        setToken
    }), [authToken])

    return (
        <AuthContext.Provider value={authMemo}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;