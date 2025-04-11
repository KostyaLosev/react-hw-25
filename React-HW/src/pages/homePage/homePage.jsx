import React from "react";
import styles from "./homePage.module.scss"
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import useCartCounter from "../../hooks/useCartCounter";


const HomePage = () => {
    const { cartCount } = useCartCounter(); 

    return (
        <div className={styles.container}>
            <Header cartCount={cartCount} />
            <Footer />
        </div>
    );
};


export default HomePage;