import React from "react";
import styles from "./categories.module.css";

const Categories = ({ onSelectCategory, selectedCategory }) => {
    return (
        <div className={styles.categories}>
            <button 
                onClick={() => onSelectCategory("Dessert")} 
                className={selectedCategory === "Dessert" ? styles.active : ""}
            >
                Dessert
            </button>
            <button 
                onClick={() => onSelectCategory("Dinner")} 
                className={selectedCategory === "Dinner" ? styles.active : ""}
            >
                Dinner
            </button>
            <button 
                onClick={() => onSelectCategory("Breakfast")} 
                className={selectedCategory === "Breakfast" ? styles.active : ""}
            >
                Breakfast
            </button>
        </div>
    );
};

export default Categories;
