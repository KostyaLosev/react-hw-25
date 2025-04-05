import React, {Component} from "react";
import styles from "./categories.module.css"

class Categories extends Component {
    render() {
    return (
        <div className={styles.categories}>
            <button>Dessert</button>
            <button>Dinner</button>
            <button>Breakfast</button>
        </div>
        )
    }
}

export default Categories;