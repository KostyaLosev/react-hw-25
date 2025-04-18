import React, { useState } from 'react';
import styles from './itemsCard.module.css';  

const ItemsCard = ({ item, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10) || 0;
        setQuantity(value);
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            onAddToCart(quantity);
        }
    };

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
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;