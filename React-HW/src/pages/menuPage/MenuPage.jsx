import React from "react";
import styles from "./menuPage.module.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

const MenuPage = () =>{
    return (
        <div className={styles.container}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default MenuPage;