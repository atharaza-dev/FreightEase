import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();

//? it is like the one who provide
export const AuthProvider = ({ children }) => {

    //? getting token globally=======================================
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    // const isLoggedIn = token;
    console.log(token);

    //? getting isAdmin Value from FORM json===================================
    const storeAdminStatus = (adminStatus) => {
        return localStorage.setItem("isAdmin", adminStatus);
    }
    const [admin, setAdmin] = useState(localStorage.getItem("isAdmin"));
    console.log(admin);

    //? logout funtionality =====================================================
    const LogoutUser = () => {
        setToken("");
        setAdmin("");
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
    };
    //? ==========================================================================================
    return <AuthContext.Provider value={{ storeToken, LogoutUser, storeAdminStatus }}>
        {children}
    </AuthContext.Provider>
}

// ? it is  like the one who needs
export const useAuth = () => {
    return useContext(AuthContext);
}