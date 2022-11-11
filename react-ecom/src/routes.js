import {useRoutes, Navigate} from "react-router-dom";

import Home from "./compnents/frontend/Home";
import Register from "./compnents/frontend/auth/Register";
import Login from "./compnents/frontend/auth/Login";


import MasterLayout from "../src/layouts/admin/MasterLayout";
import Dashboard from "./compnents/admin/Dashboard";
import Profile from "./compnents/admin/Profile";
import AdminPrivateRoute from "./AdminPrivateRoute";

const Router = () => {
    const token = localStorage.getItem('auth_token');
    let element = useRoutes([

        {
            element: <Home />,
            children: [
                {path:"/", element: <Home />},
            ]
        },

        {path:"/register", element: token ? <Navigate to="/" /> : <Register />},
        {path:"/login", element: token ? <Navigate to ="/" /> : <Login />},
        
        {   
            path:"/", element: <AdminPrivateRoute />,
            children:[
                {element:<MasterLayout />,
                    children: [
                        {path:"/admin/", element: <Dashboard />},
                        {path:"/admin/dashboard", element: <Dashboard />},
                        {path:"/admin/profile", element: <Profile />}
                    ]
                }
            ]
            
        }
    ])

    return element;
}

export default Router;
