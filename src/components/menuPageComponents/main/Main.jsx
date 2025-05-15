import React from "react";
import styles from "./main.module.css";
import MainText from "./mainText/MainText";
import Items from "./items/Items";

const Main = ({ incrementCart }) => {
    return (
        <div className={styles.main}>
            <MainText />
            <Items incrementCart={incrementCart} />
        </div>
    );
};

export default Main;