import React from "react";
import styles from "./header.module.css";
import Logo from "../../../assets/Logo.svg";
import Basket from "../../../assets/Basket.png";
import { useAppSelector } from "../../../hooks/hooks";
import { Link, useLocation  } from "react-router-dom";

const navLinks = [
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
    { name: "Company", url: "#" },
    { name: "Login", url: "/login" }
];

const Header = () => {
    const cartCount = useAppSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
);

const location = useLocation();

return (
    <div className={styles.header}>
        <div className={styles.container}>
        <div className={styles.logo}>
            <img src={Logo} alt="Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navigation}>
                    <ul>
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.url;
                            return (
                                <li key={index} >
                                    <Link
                                        to={link.url}
                                        className={isActive ? styles.activeLink : undefined}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
        <div className={styles.basket}>
            <Link to="/orders">
            <img src={Basket} alt="Basket" className={styles.basket} />
            <span className={styles.cartCount}>{cartCount}</span>
            </Link>
        </div>
        </div>
    </div>
    );
};

export default Header;