import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"))

    const setToken = (token) => setAuthToken(token)
    useEffect(() => {
        if (authToken) {
            localStorage.setItem("authToken", authToken)
        } else {
            localStorage.removeItem("authToken")
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