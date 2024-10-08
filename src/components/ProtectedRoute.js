import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();
    
    return (
        <Route
            {...rest}
            render={(props) =>
                (isAuthenticated && (props.location.pathname === '/login' || props.location.pathname === '/signup')) 
                    ? <Navigate to="/" />
                    : !isAuthenticated && (props.location.pathname === '/dashboard') 
                        ? <Navigate to="/login" />
                        : <Component {...props} />
            }
        />
    );
};


export default ProtectedRoute;