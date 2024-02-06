import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

//! it is like the one who provide
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    let isLoggedIn = !!token;
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    return <AuthContext.Provider value={{ storeToken, LogoutUser, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

// ! it is  like the one who needs
export const useAuth = () => {
    return useContext(AuthContext);
}