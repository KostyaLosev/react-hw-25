import React from "react";
import styles from "./main.module.css";
import MainText from "./mainText/MainText";
import Items from "./items/Items";
import { ItemsProps } from "./items/Items.d"

const Main = ({ incrementCart }: ItemsProps) => {
    return (
        <div className={styles.main}>
            <MainText />
            <Items incrementCart={incrementCart} />
        </div>
    );
};

export default Main;