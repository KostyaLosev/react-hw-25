import React from "react";
import styles from "./footerLinks.module.css";

const FooterLinks = () => {
    const companyLinks = [
        { name: "Home", url: "#" },
        { name: "Order", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Contact", url: "#" },
    ];

    const templateLinks = [
        { name: "Style Guide", url: "#" },
        { name: "Changelog", url: "#" },
        { name: "Licence", url: "#" },
        { name: "Webflow University", url: "#" },
    ];

    const flowbaseLinks = [{ name: "More Cloneables", url: "#" }];

    return (
        <div className={styles.links}>
            <div>
                <h4>COMPANY</h4>
                <ul>
                    {companyLinks.map((link, index) => (
                        <li key={index}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>TEMPLATE</h4>
                <ul>
                    {templateLinks.map((link, index) => (
                        <li key={index}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>FLOWBASE</h4>
                <ul>
                    {flowbaseLinks.map((link, index) => (
                        <li key={index}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterLinks;
