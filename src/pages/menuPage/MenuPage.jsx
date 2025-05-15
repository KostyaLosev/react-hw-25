import React, { useState } from "react";
import styles from "./menuPage.module.css";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Main from "../../components/menuPageComponents/main/Main";

const MenuPage = () => {
    const [cartCount, setCartCount] = useState(0);

    const incrementCart = (amount) => {
        setCartCount(prevCount => prevCount + amount);
    };

    return (
        <div className={styles.container}>
            <Header cartCount={cartCount} />
            <Main incrementCart={incrementCart} />
            <Footer />
        </div>
    );
};

export default MenuPage;