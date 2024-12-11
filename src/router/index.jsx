import React from 'react';
import Navbar from '../components/Navbar';
import { Route, Routes } from 'react-router';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import ProductDetails from '../pages/ProductDetails';

const Router = () => {
    return (
        <>
        <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        

        <Route path='product-details/:id' element={<ProductDetails />} />
      </Route>
      </Routes>
      </>
    );
}

export default Router;
