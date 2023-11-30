import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

function FooterContainer({children}) {
    const location = useLocation();

    const  [showFooter, setShowFooter] = useState(false);
    useEffect(() => {
        if(location.pathname === '/shipper-registration' || location.pathname ==='/vendor-registration' || location.pathname === '/shipper-login' || location.pathname === '/vendor-login' ){
            setShowFooter(false);
        }else{
            setShowFooter(true);
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
