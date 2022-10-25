import React, { useState } from "react";
import axios from "axios";

import Navbar from "../../../layouts/frontend/Navbar";

const Login = () => {
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e)=>{
        e.preventDefault();

        const data = {
            email:loginInput.email,
            password:loginInput.password,
        }

        axios.post(`api/login`, data).then(res=>{

        });
    }


    return(
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Email ID</label>
                                        <input type="mail" name="email" onChange={handleInput} value={loginInput.name} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control"/>
                                    </div>
    
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;