import React, { useEffect,useContext } from 'react'
import { useAuth } from '../../data/AuthContext';
import { AuthContext } from '../../data/AuthContext';

function ShipperProtectedRoute(props) {
    const { Component } = props;
    const { setShipperData } = useContext(AuthContext);
    const { backendURL } = useAuth();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                let getToken = localStorage.getItem('token');
                let isShipper = localStorage.getItem('isShipper');

                if (!getToken && (isShipper === false || isShipper === null || isShipper === undefined)) {
                    alert('Shipper privileges not found. Please log in.');
                    window.location.href = '/shipper-login';
                    return;
                }

                const response = await fetch(`${backendURL}/api/auth/shipper-verification`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken}`
                    }
                });

                if (!response.ok) {
                    const responseData = await response.json();
                    alert(responseData.error || 'Failed to verify token.');
                    window.location.href = '/shipper-login';
                    return;
                }

                const data = await response.json();
                setShipperData(data);

            } catch (error) {
                console.error('Error while verifying token:', error);
                alert('An error occurred. Please try again.');
                window.location.href = '/shipper-login';
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

export default ShipperProtectedRoute