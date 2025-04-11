import React from "react";
import styles from "./seeMoreButton.module.scss";

const SeeMoreButton = ({ onClick }) => {
    return (
        <div className={styles.container}>
            <button onClick={onClick}>See More</button>
        </div>
    );
};

export default SeeMoreButton;