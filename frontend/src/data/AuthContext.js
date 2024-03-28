import { createContext, useContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    //! getting token globally=======================================
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }
    // console.log(token);

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
    // const [adminData, setAdminData] = useState([]);
    // const [adminName, setAdminName] = useState([]);

    // useEffect(() => {
    //     const fetchAdminData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:5000/api/auth/admin-info');
    //             if (!response.ok) {
    //                 throw new Error('Error getting data from database!');
    //             }
    //             const getAdminData = await response.json();
    //             // console.table(getAdminData);

    //             const names = getAdminData.map(admin => admin.name);
    //             // console.table(names);
    //             setAdminName(names);

    //         } catch (error) {
    //             console.error('Error getting data from database:', error);
    //             alert('Error getting data from database!');
    //         }
    //     };

    //     fetchAdminData();
    // }, []);

    // useEffect(() => {
    //     console.log('Admin names:', adminName);
    // }, [adminName]);


    const [adminInfo, setAdminInfo] = useState('');

    const setAdminData = (data) => {
        setAdminInfo(data);
    };

    useEffect(() => {
        // console.log('from auth outer', adminInfo);
    }, [adminInfo]);



    //? ==========================================================================================
    return <AuthContext.Provider value={{ storeToken, LogoutUser, storeAdminStatus, storeShipperStatus, storeVendorStatus, setAdminData, adminInfo }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}