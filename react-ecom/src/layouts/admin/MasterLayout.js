import React from 'react';
import '../../assets/admin/style.css';

import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';

const MasterLayout = () => {

    return (
        <div>
            <div className='container-fluid'>
                <div className="row g-0">
                    
                    <SideBar />

                    <main className="col-10 bg-secondary">

                        <Navbar />

                        <div className="container-fluid mt-3 p-4">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MasterLayout;