import React, { useEffect, useContext } from 'react'
import { AuthContext } from '../../data/AuthContext';
import { useAuth } from '../../data/AuthContext';
    

function VendorProtectedRoute(props) {
    const { Component } = props;
    const { setVendorData } = useContext(AuthContext);
    
    const { backendURL } = useAuth();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                let getToken = localStorage.getItem('token');
                let isVendor = localStorage.getItem('isVendor');

                if (!getToken && (isVendor === false || isVendor === null || isVendor === undefined)) {
                    alert('Vendor privileges not found. Please log in.');
                    window.location.href = '/vendor-login';
                    return;
                }

                const response = await fetch(`${backendURL}/api/auth/vendor-verification`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken}`
                    }
                });

                if (!response.ok) {
                    const responseData = await response.json();
                    alert(responseData.error || 'Failed to verify token.');
                    window.location.href = '/vendor-login';
                    return;
                }

                const data = await response.json();
                setVendorData(data);
                console.log(data);
                console.log('Token verified:');

            } catch (error) {
                console.error('Error while verifying token:', error);
                alert('An error occurred. Please try again.');
                window.location.href = '/vendor-login';
            }
        };

        verifyToken();
    }, []);

    return (
        <>
            <Component></Component>
        </>
    )
}

export default VendorProtectedRoute