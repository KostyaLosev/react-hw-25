import React from "react";
import FooterBrand from "./footerBrand/FooterBrand";
import FooterLinks from "./footerLinks/FooterLinks";
import FooterBottom from "./footerBottom/FooterBottom";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <FooterBrand />
                <FooterLinks />
            </div>
            <FooterBottom text="Built by Flowbase• Powered by Webflow" />
        </footer>
    );
};

export default Footer;
