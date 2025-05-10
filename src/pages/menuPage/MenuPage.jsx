import React, { Component } from "react";
import styles from "./menuPage.module.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0,
            categories: [] 
        };
    }

    incrementCart = (amount) => {
        this.setState((prevState) => ({
            cartCount: prevState.cartCount + amount
        }));
    };

    handleCategoriesExtracted = (categories) => {
        this.setState({ categories });
    };

    render() {
        return (
            <div className={styles.container}>
                <Header cartCount={this.state.cartCount} />
                <Main
                    incrementCart={this.incrementCart}
                    categories={this.state.categories}
                    onCategoriesExtracted={this.handleCategoriesExtracted}
                />
                <Footer />
            </div>
        );
    }
}

export default MenuPage;
