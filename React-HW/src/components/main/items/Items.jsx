import React from "react";
import styles from "./items.module.css";
import Burger1 from "../../../assets/Burger1.png";
import Burger2 from "../../../assets/Burger2.png";
import Burger3 from "../../../assets/Burger3.png";
import Burger4 from "../../../assets/Burger4.png";
import Burger5 from "../../../assets/Burger5.png";
import Burger6 from "../../../assets/Burger6.png";

const itemsData = [
    { id: 1, name: "Burger Dreams", price: 9.2, img: Burger1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, name: "Burger Cali", price: 8.0, img: Burger2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 3, name: "Burger Spicy", price: 9.2, img: Burger3, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, name: "Burger Waldo", price: 10.0, img: Burger4, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 5, name: "Burger Bacon Buddy", price: 9.99, img: Burger5, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 6, name: "Burger Classic", price: 8.0, img: Burger6, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

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
