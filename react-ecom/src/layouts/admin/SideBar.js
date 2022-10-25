import React  from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return(
        <nav className="col-2 bg-light pe-3">
            <h1 to="/admin" className="py-3 text-center text-primary h4">
                <i className="fas fa-ghost me-2"></i>
                <span className="d-none d-lg-inline">
                    GHOST ADMIN
                </span>
            </h1>

            <div className="list-group text-center text-lg-start">
                <span className="list-group-item disabled d-none d-lg-block">
                    <small>CONTROLS</small>
                </span>
                <Link to="/admin/dashboard" className="list-group-item list-group-item-action active">
                    <i className="fas fa-home"></i>
                    <span className="d-none d-lg-inline">Dashboard</span>
                </Link>
                <Link to="/admin/profile" className="list-group-item list-group-item-action">
                    <i className="fas fa-users"></i>
                    <span className="d-none d-lg-inline">Profile</span>
                    <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">20</span>
                </Link>

                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fas fa-chart-line"></i>
                    <span className="d-none d-lg-inline">Statistics</span>
                </Link>

                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fas fa-flag"></i>
                    <span className="d-none d-lg-inline">Reports</span>
                </Link>
            </div>

            <div className="list-group mt-4 text-center text-lg-start">
                <span className="list-group-item disabled d-none d-lg-block">
                    <small>ACTIONS</small>
                </span>

                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-lg-inline">New Users</span>
                </Link>

                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fas fa-edit"></i>
                    <span className="d-none d-lg-inline">Update Data</span>
                </Link>

                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="far fa-calendar-alt"></i>
                    <span className="d-none d-lg-inline">Add Events</span>
                </Link>
            </div>
        </nav>
    )
}

export default SideBar;