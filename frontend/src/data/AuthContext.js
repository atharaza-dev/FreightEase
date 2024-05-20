import { createContext, useContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    //! getting token globally=======================================
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }
    // console.log(token);
    console.log("committed");

    //! getting isAdmin Value from FORM json===================================
    const storeAdminStatus = (adminStatus) => {
        return localStorage.setItem("isAdmin", adminStatus);
    }
    const [admin, setAdmin] = useState(localStorage.getItem("isAdmin"));
    // console.log(admin);

    //! getting isShipper Value from FORM json===================================
    const storeShipperStatus = (shipperStatus) => {
        return localStorage.setItem("isShipper", shipperStatus);
    }
    const [shipper, setShipper] = useState(localStorage.getItem("isShipper"));
    // console.log(shipper);

    //! getting isVendor Value from FORM json===================================
    const storeVendorStatus = (vendorStatus) => {
        return localStorage.setItem("isVendor", vendorStatus);
    }
    const [vendor, setVendor] = useState(localStorage.getItem("isVendor"));
    // console.log(vendor);

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

    //!! getting Admin Details =====================================================
    const [adminInfo, setAdminInfo] = useState('');

    const setAdminData = (adminObj) => {
        setAdminInfo(adminObj);
    };

    useEffect(() => {
        // console.log('Admin Logged In:', adminInfo);
    }, [adminInfo]);


    //!! getting vendor Details =====================================================
    const [vendorData, setVendorData] = useState('');

    const vendorInfo = (vendorObj) => {
        setVendorData(vendorObj);
    };

    useEffect(() => {
        // console.log('Vendor Logged In', vendorData);
    }, [vendorData]);

    //!! getting vendor Details =====================================================
    const [shipperData, setShipperData] = useState('');

    const shipperInfo = (shipperObj) => {
        setShipperData(shipperObj);
    };

    useEffect(() => {
        // console.log('Vendor Logged In', vendorData);
    }, [shipperData]);
console.log('from auth',shipperData);
    //!! Sharing Backend URL Details =====================================================
    const backendURL = `http://localhost:5000`;

    //? ==========================================================================================
    return <AuthContext.Provider value={{
        storeToken,
        LogoutUser,
        storeAdminStatus,
        storeShipperStatus,
        storeVendorStatus,
        setAdminData,
        adminInfo,
        setVendorData,
        vendorData,
        shipperData, setShipperData,
        backendURL
    }}>

        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}