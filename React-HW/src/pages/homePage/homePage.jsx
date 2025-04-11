import React from "react";
import styles from "./homePage.module.scss"
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";


const HomePage = () => {

    return (
        <div className={styles.container}>
            <Header />
            <Footer />
        </div>
    );
};


export default HomePage;