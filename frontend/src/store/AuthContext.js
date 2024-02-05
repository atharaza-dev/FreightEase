import { createContext, useContext } from 'react';

export const AuthContext = createContext();

//! it is like the one who provide
export const AuthProvider = ({ children }) => {
    const storeToken = (serverToken) => {
        return localStorage.setItem("Token", serverToken);
    }
    return <AuthContext.Provider value={storeToken}>
        {children}
    </AuthContext.Provider>
}

// ! it is  like the one who needs
export const useAuth = () => {
    return useContext(AuthContext);
}