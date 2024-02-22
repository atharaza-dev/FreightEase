import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

//! it is like the one who provide
export const AuthProvider = ({ children }) => {

    //? getting token globally
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    // let isLoggedIn = !!token;
    // const LogoutUser = () => {
    //     setToken("");
    //     return localStorage.removeItem("token");
    // };

    // //? getting isAdmin Value from FORM json
    // const [isAdmin, setIsAdmin] = useState(false);
    // const verifyAdmin = (adminStatus) => {
    //     setIsAdmin(adminStatus);
    // };
    // console.log('isAdmin', isAdmin);

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    const isLoggedIn = token;
    console.log('isLoggedIn', isLoggedIn);

    return <AuthContext.Provider value={{ storeToken, LogoutUser, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

// ! it is  like the one who needs
export const useAuth = () => {
    return useContext(AuthContext);
}