import React  from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="flex-fill"></div>

            <div className="navbar nav">
                <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fas fa-user-circle"></i>
                    </Link>

                    <ul className="dropdown-menu">
                        <li><Link to="#" className="dropdown-item">User Profile</Link></li>
                        <li><Link to="#" className="dropdown-item">Log Out</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link">
                        <i className="fas fa-cog"></i>
                    </Link>
                </li>
            </div>
    </nav>
    );
}

export default Navbar;