import React from "react";
import styles from "./categories.module.css";

const Categories = ({ categories }) => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <button key={category}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
