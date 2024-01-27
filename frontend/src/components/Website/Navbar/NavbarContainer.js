import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function NavContainer({ children }) {
    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/services' || location.pathname === '/about-us'|| location.pathname === '/contact-us' || location.pathname === '/quote-generator' || location.pathname === '/help' || location.pathname === '/tow-service' || location.pathname === '/vehicles-list' || location.pathname === '/vehicle-frame'  || location.pathname === '*'  || location.pathname === '/terms-and-conditions'  ) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
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
