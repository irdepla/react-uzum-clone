import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TopHeader from '../../components/TopHeader';

const MainLayout = () => {
    return (
        <>
        <TopHeader />
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
}

export default MainLayout;
