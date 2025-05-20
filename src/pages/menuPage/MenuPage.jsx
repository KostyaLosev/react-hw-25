import React, { useState } from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Main from "../../components/menuPageComponents/main/Main";

const MenuPage = () => {
    const [cartCount, setCartCount] = useState(0);

    const incrementCart = (amount) => {
        setCartCount(prevCount => prevCount + amount);
    };

    return (
        <div>
            <Header cartCount={cartCount} />
            <Main incrementCart={incrementCart} />
            <Footer />
        </div>
    );
};

export default MenuPage;