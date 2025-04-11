import React from "react";
import NavLinks from "./navLinks/NavLinks";
import styles from "./header.module.scss";
import Logo from "../../../assets/Logo.png";
import Basket from "../../../assets/Basket.png";

const Header = ({ cartCount }) => {
    const navLinks = [
        { name: "Home", url: "/" },
        { name: "Menu", url: "/menu" },
        { name: "Company", url: "#" },
        { name: "Login", url: "#" }
    ];

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" className={styles.logoImage} />
                </div>
                <nav className={styles.navigation}>
                    <NavLinks links={navLinks} />
                </nav>
                <div className={styles.basket}>
                    <img src={Basket} alt="Basket" className={styles.basket} />
                    <span className={styles.cartCount}>{cartCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;