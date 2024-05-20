import React, { useEffect, useContext } from 'react'
import { AuthContext } from '../../data/AuthContext';
import { useAuth } from '../../data/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminProtectedRoute(props) {
    const { Component } = props;
    const { setAdminData } = useContext(AuthContext);

    const { backendURL } = useAuth();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                let getToken = localStorage.getItem('token');
                let isAdmin = localStorage.getItem('isAdmin');

                if (!getToken && (isAdmin === false || isAdmin === null || isAdmin === undefined)) {
                    // alert('ADMIN privileges not found. Please log in.');
                    toast.error('ADMIN privileges not found. Please log in.', {
                        position: "top-right",
                        theme: "colored",
                    });
                    window.location.href = '/admin-login';
                    return;
                }

                const response = await fetch(`${backendURL}/api/auth/admin-verification`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken}`
                    }
                });

                if (!response.ok) {
                    const responseData = await response.json();
                    alert(responseData.error || 'Failed to verify token.');
                    window.location.href = '/admin-login';
                    return;
                }

                const data = await response.json();
                setAdminData(data);
                console.log('Token verified:', data);

            } catch (error) {
                console.error('Error while verifying token:', error);
                alert('An error occurred. Please try again.');
                window.location.href = '/admin-login';
            }
        };

        verifyToken();
    }, []);

    return (
        <>
            <Component></Component>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default AdminProtectedRoute