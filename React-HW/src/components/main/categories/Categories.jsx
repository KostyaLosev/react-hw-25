import React from "react";
import styles from "./categories.module.css"

const Categories = () => {
    return (
        <div className={styles.categories}>
            <button>Dessert</button>
            <button>Dinner</button>
            <button>Breakfast</button>
        </div>
    )
}

export default Categories;