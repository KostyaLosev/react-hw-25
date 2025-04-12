import React from "react";
import styles from "./header.module.css"
import Logo from "../../assets/Logo.svg"
import Basket from "../../assets/Basket.png"

const Header = () => {

    const navLinks = [
        { name: "Home", url: "#" },
        { name: "Menu", url: "#" },
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
                <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} style={link.name === "Menu" ? {color: "#35B8BE"}:{}}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.basket}>
                    <img src={Basket} alt="Basket" className={styles.basket}></img>
                </div>
            </div>
        </div>
    )
}

export default Header;
