import React from "react";
import styles from "./itemsCard.module.css";
import { ItemsCardProps } from "./ItemsCard.d"

const ItemsCard = ({ item, quantity, onQuantityChange, onAddToCart }: ItemsCardProps) => {
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
                        onChange={onQuantityChange}
                    />
                    <button onClick={onAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;
