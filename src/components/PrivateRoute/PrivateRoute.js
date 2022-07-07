
import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { useLocation, Navigate } from "react-router-dom";


const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    let location = useLocation();

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />

};

export default PrivateRoute;