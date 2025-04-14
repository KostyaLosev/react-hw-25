import React from "react";
import Logo from "../../../assets/Logo.svg"
import styles from "./footerBrand.module.css"


const FooterBrand = () => {
    return (
        <div className={styles.brand}>
            <img src={Logo} alt="Logo" className={styles.logo} />
                <p className={styles.description}>
            Takeaway & Delivery template for small - medium businesses.
            </p>
        </div>
        );
}

export default FooterBrand;