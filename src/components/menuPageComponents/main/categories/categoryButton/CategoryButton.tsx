import React from "react";
import styles from "./categoryButton.module.css";
import { CategoryButtonProps } from "./CategoryButton.d"

const CategoryButton = ({ category, isSelected, onClick }: CategoryButtonProps) => {
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