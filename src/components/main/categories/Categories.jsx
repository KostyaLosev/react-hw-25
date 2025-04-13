import React from "react";
import styles from "./categories.module.css";

const Categories = ({ categories, onSelectCategory, selectedCategory }) => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={selectedCategory === category ? styles.active : ""}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
