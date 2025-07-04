import React from "react";
import styles from "./footerLinks.module.css";
import { LinkItem } from "./FooterLinks.d"

const companyLinks: LinkItem[] = [
    { name: "Home", url: "#" },
    { name: "Order", url: "#" },
    { name: "FAQ", url: "#" },
    { name: "Contact", url: "#" },
];

const templateLinks: LinkItem[] = [
    { name: "Style Guide", url: "https://www.google.com/" },
    { name: "Changelog", url: "https://www.google.com/" },
    { name: "Licence", url: "https://www.google.com/" },
    { name: "Webflow University", url: "https://www.google.com/" },
];

const flowbaseLinks: LinkItem[] = [
    { name: "More Cloneables", url: "#" }
];

const FooterLinks = () => {

    const renderLinks = (links: LinkItem[]) => (
        <ul>
            {links.map((link, index) => (
                <li key={index}><a href={link.url}>{link.name}</a></li>
            ))}
        </ul>
    );

    return (
        <div className={styles.links}>
            <div>
                <h4>COMPANY</h4>
                {renderLinks(companyLinks)}
            </div>
            <div>
                <h4>TEMPLATE</h4>
                {renderLinks(templateLinks)}
            </div>
            <div>
                <h4>FLOWBASE</h4>
                {renderLinks(flowbaseLinks)}
            </div>
        </div>
    );
};

export default FooterLinks;