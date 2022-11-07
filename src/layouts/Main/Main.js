import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';
import NavHeader from '../../Pages/Shared/NavHeader';

const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;