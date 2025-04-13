import React from "react";
import styles from "./items.module.css";
import { itemsData } from "./itemsData";

const Items = () => {
    return (
        <div className={styles.itemsgrid}>
            {itemsData.map((item) => (
                <div key={item.id} className={styles.itemscard}>
                    <img src={item.img} alt={item.name} />
                    <div className={styles.itemscardContent}>
                        <div className={styles.itemscardHeader}>
                            <h3>{item.name}</h3>
                            <p>${item.price} USD</p>
                        </div>
                        <p className={styles.description}>{item.description}</p>
                        <div className={styles.buttonWrapper}>
                            <input
                                type="number"
                                value="1"
                                className={styles.counterInput}
                                min="1"
                                readOnly
                            />
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;
