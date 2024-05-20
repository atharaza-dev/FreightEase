import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function FooterContainer({ children }) {
  const location = useLocation();

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/services' || location.pathname === '/about-us' || location.pathname === '/contact-us' || location.pathname === '/quote-generator' || location.pathname === '/help' || location.pathname === '/tow-service' || location.pathname === '/vehicles-list' || location.pathname === '*'  || location.pathname === '/vehicle-frame'  || location.pathname === '/terms-and-conditions') {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
    //  console.log("This is location", location);
  }, [location]);

  return (
    <div>
      {showFooter && children}
    </div>
  )
}

export default FooterContainer
