import React from 'react';
import {useAuth} from './context';
import {Navigate,useNavigate} from 'react-router-dom';

export default function Login(){
    const navigate=useNavigate();
    const {isAuth,setIsAuth}=useAuth();
    function handleLogin(){
        setIsAuth(!isAuth);
        navigate('/');
    }
    if(isAuth)
    {
        return(
            <>
                <h1>Log Out</h1>
                <button onClick={handleLogin}>Log Out</button>
            </>
        );
    }
    else{
        return(
            <>
                <h1>Login</h1>
                <button onClick={handleLogin}>Login</button>
            </>
        );
    }
}