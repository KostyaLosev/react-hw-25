import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import MenuPage from "../pages/menuPage/menuPage";

const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
    </Routes>
    );
};

export default AppRoutes;