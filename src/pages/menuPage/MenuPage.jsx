import React, { Component } from "react";
import styles from "./menuPage.module.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0
        };
    }

    incrementCart = (amount) => {
        this.setState((prevState) => ({
            cartCount: prevState.cartCount + amount
        }));
    };

    render() {
        return (
            <div className={styles.container}>
                <Header cartCount={this.state.cartCount} />
                <Main incrementCart={this.incrementCart} />
                <Footer />
            </div>
        );
    }
}

export default MenuPage;