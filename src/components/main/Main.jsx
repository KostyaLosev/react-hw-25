import React, { Component } from "react";
import styles from "./main.module.css";
import MainText from "./mainText/MainText";
import Categories from "./categories/Categories";
import Items from "./items/Items";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    handleCategoriesExtracted = (categories) => {
        this.setState({ categories });
    };

    render() {
        return (
            <div className={styles.main}>
                <MainText />
                <Categories categories={this.state.categories} />
                <Items
                    incrementCart={this.props.incrementCart}
                    onCategoriesExtracted={this.handleCategoriesExtracted}
                />
            </div>
        );
    }
}

export default Main;
