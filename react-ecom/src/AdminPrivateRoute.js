import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const useAuth= ()=>{
    const auth = localStorage.getItem('auth_token');
    if(auth)
    {
        return true;
    }
    {
        return false;
    }
}

const AdminPrivateRoute = (props) =>{

    const navigate = useNavigate();

    const[Authenticated, setAuthenticated] = useState(false);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(`api/checkingAuthenticated`).then(res=>{
            if(res.status === 200)
            {   
                setAuthenticated(true);
            }
            setLoading(false);
        });

        return()=>{
            setAuthenticated(false);
        }
    },[]);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
        if(err.response.status === 401)
        {
            swal('Unauthorized', err.response.data.message, "warning");
            navigate('/');
        }
        return Promise.reject(err);
    })

    if(loading){
        return <h1>Loading...</h1>
    }

    return Authenticated ? <Outlet /> : <Navigate to="/login" replace={true} />
}

export default AdminPrivateRoute;