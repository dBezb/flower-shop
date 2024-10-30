import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import Home from '../../components/Home/Home';
import FlowerShop from '../FlowerShop/FlowerShop';
import Cart from '../../components/Cart/Cart';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SHOP} element={<FlowerShop />} />
            <Route path={ROUTES.CART} element={<Cart />} />
        </Routes>
    );
};

export default AppRoutes;
