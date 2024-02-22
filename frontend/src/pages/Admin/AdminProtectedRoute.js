import React, { useEffect } from 'react'
import { useAuth } from '../../data/AuthContext';

function AdminProtectedRoute(props) {
    const { Component } = props;

    const { isLoggedIn } = useAuth();
    useEffect(() => {
        if (!isLoggedIn) {
            alert('You are not authorized as admin');
            window.location.href = '/admin-login'
        }
    },);

    return (
        <>
            <Component></Component>
        </>
    )
}

export default AdminProtectedRoute