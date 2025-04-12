import React from "react";
import styles from "./mainText.module.css";

const MainText = () => {
    return (
        <div className={styles.maintext}>
            <h1>Browse our menu</h1>
            <p>Use our menu to place an order online, or <span className={styles.phoneTooltip}>phone</span> our store to place a pickup order. Fast and fresh food</p>
        </div>
    )
}

export default MainText;
