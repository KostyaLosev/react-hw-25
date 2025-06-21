import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./themeToggle.module.css"

const ThemeToggle = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) return null;

    return (
        <div className={styles.themeToggleBtn}>
    <button onClick={ctx.toggleTheme}>
        Theme
    </button>
    </div>
    );
};

export default ThemeToggle;
