import React, { Component } from "react";
import styles from "./seeMoreButton.module.css";

class SeeMoreButton extends Component {
    render() {
        return (
            <div className={styles.container}>
                <button onClick={this.props.onClick}>See More</button>
            </div>
        );
    }
}

export default SeeMoreButton;

