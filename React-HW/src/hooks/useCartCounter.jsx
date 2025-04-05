import React, { Component } from "react";

class CartCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0
        };
    }

    incrementCart = (amount) => {
        this.setState(prevState => ({
            cartCount: prevState.cartCount + amount
        }));
    };

    render() {
        return this.props.children(this.state.cartCount, this.incrementCart);
    }
}

export default CartCounter;
