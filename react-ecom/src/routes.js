import {useRoutes} from "react-router-dom";

import Home from "./compnents/frontend/Home";
import Register from "./compnents/frontend/auth/Register";
import Login from "./compnents/frontend/auth/Login";


import MasterLayout from "../src/layouts/admin/MasterLayout";
import Dashboard from "./compnents/admin/Dashboard";
import Profile from "./compnents/admin/Profile";

const Router = () => {
    let element = useRoutes([

        {
            element: <Home />,
            children: [
                {path:"/", element: <Home />},
            ]
        },

        {path:"/register", element: <Register />},
        {path:"/login", element: <Login />},
        
        {
            element: <MasterLayout />,
            children: [
                {path:"/admin/", element: <Dashboard />},
                {path:"/admin/dashboard", element: <Dashboard />},
                {path:"/admin/profile", element: <Profile />}
            ]
        }
    ])

    return element;
}

export default Router;
