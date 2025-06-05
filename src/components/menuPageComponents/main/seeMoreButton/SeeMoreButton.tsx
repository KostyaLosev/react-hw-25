import React from "react";
import styles from "./seeMoreButton.module.css";
import { SeeMoreButtonProps } from "./SeeMoreButton.d"

const SeeMoreButton = ({ onClick }: SeeMoreButtonProps) => {
    return (
        <div className={styles.container}>
            <button onClick={onClick}>See More</button>
        </div>
    );
};

export default SeeMoreButton;