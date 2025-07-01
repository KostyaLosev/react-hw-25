import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import MenuPage from "../pages/menuPage/MenuPage";
import LoginPage from "../pages/loginPage/LoginPage";
import OrderPage from "../pages/orderPage/OrderPage";
import ProtectedRoute from "./PrivateRoutes";

const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
        path="/orders"
        element={
            <ProtectedRoute>
            <OrderPage />
            </ProtectedRoute>
        }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    );
};

export default AppRoutes;