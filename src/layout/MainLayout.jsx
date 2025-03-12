import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const MainLayout = () => {
    return (
        <div className='bg-black min-h-screen'>
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            
            
            
        </div>
    );
};

export default MainLayout;