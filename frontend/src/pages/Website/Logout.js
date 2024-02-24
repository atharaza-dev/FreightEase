import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../data/AuthContext';

function Logout() {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
    },)

    return <Navigate to='/' />;
}

export default Logout