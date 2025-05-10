import React, { Component } from "react";
import styles from "./footerBottom.module.css";
import Instagram from "../../../assets/Instagram.png";
import Twitter from "../../../assets/Twitter.png";
import Youtube from "../../../assets/Youtube.png";

class FooterBottom extends Component {
    formatText(text) {
        const regex = /(Flowbase|Webflow)/g;
        const parts = text.split(regex);
        return parts.map((part, index) => {
            if (part === "Flowbase" || part === "Webflow") {
                return <span key={index} className={styles.highlight}>{part}</span>;
            }
            return part;
        });
    }

    render() {
        const { text } = this.props;
        return (
            <div className={styles.bottom}>
                <p>{this.formatText(text)}</p>
                <div className={styles.socials}>
                    <a href="#">
                        <img src={Instagram} alt="Instagram" className={styles.icon} />
                    </a>
                    <a href="#">
                        <img src={Twitter} alt="Twitter" className={styles.icon} />
                    </a>
                    <a href="#">
                        <img src={Youtube} alt="Youtube" className={styles.icon} />
                    </a>
                </div>
            </div>
        );
    }
}

export default FooterBottom;

