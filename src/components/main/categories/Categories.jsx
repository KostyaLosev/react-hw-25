import React, { Component } from "react";
import styles from "./categories.module.css";
import CategoryButton from "./categoryButton/CategoryButton";

class Categories extends Component {
    render() {
        const { categories, onCategoryClick } = this.props;

        return (
            <div className={styles.categories}>
                {categories.map((category) => (
                    <CategoryButton
                        key={category}
                        category={category}
                        onClick={onCategoryClick}
                    />
                ))}
            </div>
        );
    }
}

export default Categories;
