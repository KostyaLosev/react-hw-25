import React from "react";
import styles from "./main.module.css";
import MainText from "./mainText/MainText";
import Categories from "./categories/Categories";
import Items from "./items/Items";
import SeeMoreButton from "./seeMoreButton/SeeMoreButton";
import { itemsData } from "./items/ItemsData";

const Main = () => {
    const uniqueCategories = [...new Set(itemsData.map(item => item.category))];

    return (
        <div className={styles.main}>
            <MainText />
            <Categories categories={uniqueCategories} />
            <Items itemsData={itemsData} />
            <SeeMoreButton />
        </div>
    ); 
};

export default Main;
