import React from "react";
import styles from "./footerBottom.module.css";
import Instagram from "../../../../assets/Instagram.svg";
import Twitter from "../../../../assets/Twitter.svg";
import Youtube from "../../../../assets/Youtube.svg";
import { FooterBottomProps } from "./FooterBottom.d"

const FooterBottom = ({ text }: FooterBottomProps) => {
    const formatText = (text: string) => {
        const regex = /(Flowbase|Webflow)/g;
        const parts = text.split(regex);
        return parts.map((part, index) =>
            part === "Flowbase" || part === "Webflow" ? (
                <span key={index} className={styles.highlight}>{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className={styles.bottom}>
            <p>{formatText(text)}</p>
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
};

export default FooterBottom;