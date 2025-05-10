import React, { Component } from "react";
import styles from "./categoryButton.module.css";

class CategoryButton extends Component {
    handleClick = () => {
        const { category, onClick } = this.props;
        onClick(category);
    };

    render() {
        const { category } = this.props;

        return (
            <button className={styles.button} onClick={this.handleClick}>
                {category}
            </button>
        );
    }
}

export default CategoryButton;