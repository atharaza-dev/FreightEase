import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function NavContainer({ children }) {
    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        if (location.pathname === '/shipper-registration' || location.pathname === '/vendor-registration' || location.pathname === '/shipper-login'|| location.pathname === '/vendor-login' ) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        //  console.log("This is location", location);
    }, [location]);

    return (
        <div>
            {showNavbar && children}
        </div>
    )
}

export default NavContainer
