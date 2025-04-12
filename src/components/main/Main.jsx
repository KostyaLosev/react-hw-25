import React from "react";
import styles from "./main.module.css"
import MainText from "./mainText/MainText";
import Categories from "./categories/Categories";
import Items from "./items/Items";
import SeeMoreButton from "./seeMoreButton/SeeMoreButton";

const Main = () => {
    return (
        <div className={styles.main}>
            <MainText/>
            <Categories/>
            <Items/>
            <SeeMoreButton/>
        </div>
    )
}

export default Main;