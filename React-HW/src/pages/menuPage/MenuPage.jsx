import React from "react";
import styles from "./menuPage.module.scss";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Main from "../../components/menuPageComponents/main/Main";
import useCartCounter from "../../hooks/useCartCounter";



const MenuPage = () => {
    const { cartCount, incrementCart } = useCartCounter(); 

    return (
        <div className={styles.container}>
            <Header cartCount={cartCount} />
            <Main incrementCart={incrementCart} />
            <Footer />
        </div>
    );
};

export default MenuPage;