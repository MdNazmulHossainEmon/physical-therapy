
import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { useLocation, Navigate } from "react-router-dom";
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className='text-center my-3'>
            <Spinner animation="border" variant="dark" />
        </div>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />

};

export default PrivateRoute;