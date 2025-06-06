import React from "react";
import styles from "./main.module.css";
import MainText from "./mainText/MainText";
import Items from "./items/Items";

const Main = () => {
    return (
        <div className={styles.main}>
            <MainText />
            <Items />
        </div>
    );
};

export default Main;