import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

//! it is like the one who provide
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const rcvdToken = localStorage.getItem(("token"));

    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    const [isAdmin, setIsAdmin] = useState(false);
    const verifyAdmin = (isAdmin) => {
        setIsAdmin(isAdmin);
    }
    console.log(isAdmin);
    
    let isLoggedIn = !!token;
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    return <AuthContext.Provider value={{ storeToken, LogoutUser, isLoggedIn, verifyAdmin }}>
        {children}
    </AuthContext.Provider>
}

// ! it is  like the one who needs
export const useAuth = () => {
    return useContext(AuthContext);
}