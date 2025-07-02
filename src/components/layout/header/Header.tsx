import React from "react";
import styles from "./header.module.css";
import Logo from "../../../assets/Logo.svg";
import Basket from "../../../assets/Basket.png";
import { useAppSelector, useAppDispatch  } from "../../../hooks/hooks";
import { Link, useLocation  } from "react-router-dom";
import ThemeToggle from "../../themeToggle/ThemeToggle";
import { logout } from "../../../features/AuthSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase-config";

const navLinks = [
    { name: "Home", url: "/" },
    { name: "Menu", url: "/menu" },
    { name: "Company", url: "#" },
];

const Header = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const user = useAppSelector(state => state.auth.user);

    const cartCount = useAppSelector(state =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );

    const handleLogout = async () => {
        try {
            await signOut(auth);  
            dispatch(logout());   
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
    };

    return (
        <div className={styles.header}>
            <div className={styles.themeToggleBtn}>
                <ThemeToggle />
            </div>
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
                        {!user && (
                            <li>
                                <Link
                                    to="/login"
                                    className={location.pathname === "/login" ? styles.activeLink : undefined}
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                        {user && (
                            <li>
                                <button onClick={handleLogout} className={styles.logoutBtn}>
                                    Logout
                                </button>
                            </li>
                        )}
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
