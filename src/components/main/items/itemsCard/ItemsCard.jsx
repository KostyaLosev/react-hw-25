import React, { Component } from "react";
import styles from "./itemsCard.module.css";

class ItemsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    }

    handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10) || 0;
        this.setState({ quantity: value });
    };

    handleAddToCart = () => {
        const { quantity } = this.state;
        if (quantity > 0) {
            this.props.onAddToCart(quantity);
        }
    };

    render() {
        const { item } = this.props;
        const { quantity } = this.state;

        return (
            <div className={styles.itemscard}>
                <img src={item.img} alt={item.meal} />
                <div className={styles.itemscardContent}>
                    <div className={styles.itemscardHeader}>
                        <h3>{item.meal}</h3>
                        <p>${item.price}</p>
                    </div>
                    <p className={styles.description}>
                        {item.instructions.length > 80
                            ? `${item.instructions.substring(0, 80)}...`
                            : item.instructions}
                    </p>
                    <div className={styles.buttonWrapper}>
                        <input
                            type="number"
                            value={quantity}
                            className={styles.counterInput}
                            min="0"
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemsCard;
