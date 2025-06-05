import React from "react";
import styles from "./categories.module.css";
import CategoryButton from "./categoryButton/CategoryButton";
import { CategoriesProps } from "./Categories.d"

const Categories = ({ categories, onSelectCategory, selectedCategory }: CategoriesProps) => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <CategoryButton
                    key={category}
                    category={category}
                    isSelected={selectedCategory === category}
                    onClick={onSelectCategory}
                />
            ))}
        </div>
    );
};

export default Categories;