import React from "react";
import styles from "./categoryButton.module.css";

const CategoryButton = ({ category, isSelected, onClick }) => {
    const handleClick = () => {
        onClick(category);
    };

    return (
        <button
            className={`${styles.button} ${isSelected ? styles.active : ""}`}
            onClick={handleClick}
        >
            {category}
        </button>
    );
};

export default CategoryButton;

