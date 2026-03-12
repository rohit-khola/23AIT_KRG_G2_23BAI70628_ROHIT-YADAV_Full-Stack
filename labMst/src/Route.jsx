import React from 'react';
import {useAuth} from './context';
import {Navigate} from 'react-router-dom';
export default function AuthProtected({children}){
    const {isAuth}=useAuth();
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children;
}