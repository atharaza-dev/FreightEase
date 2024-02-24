import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    //! getting token globally=======================================
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }
    console.log(token);

    //! getting isAdmin Value from FORM json===================================
    const storeAdminStatus = (adminStatus) => {
        return localStorage.setItem("isAdmin", adminStatus);
    }
    const [admin, setAdmin] = useState(localStorage.getItem("isAdmin"));
    console.log(admin);

    //! getting isShipper Value from FORM json===================================
    const storeShipperStatus = (shipperStatus) => {
        return localStorage.setItem("isShipper", shipperStatus);
    }
    const [shipper, setShipper] = useState(localStorage.getItem("isShipper"));
    console.log(shipper);

    //! getting isVendor Value from FORM json===================================
    const storeVendorStatus = (vendorStatus) => {
        return localStorage.setItem("isVendor", vendorStatus);
    }
    const [vendor, setVendor] = useState(localStorage.getItem("isVendor"));
    console.log(vendor);

    //!! logout funtionality =====================================================
    const LogoutUser = () => {
        setToken("");
        setAdmin("");
        setShipper("");
        setVendor("");
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("isShipper");
        localStorage.removeItem("isVendor");
        window.location.href = '/';
    };
    //? ==========================================================================================
    return <AuthContext.Provider value={{ storeToken, LogoutUser, storeAdminStatus, storeShipperStatus, storeVendorStatus }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}