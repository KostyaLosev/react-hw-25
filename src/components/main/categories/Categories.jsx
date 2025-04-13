import React, { Component } from "react";
import styles from "./categories.module.css";

class Categories extends Component {
    render() {
        const { categories } = this.props;

        return (
            <div className={styles.categories}>
                {categories.map((category) => (
                    <button key={category}>
                        {category}
                    </button>
                ))}
            </div>
        );
    }
}

export default Categories;
