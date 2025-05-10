import React, { Component } from "react";
import styles from "./footerLinks.module.css";

const companyLinks = [
    { name: "Home", url: "#" },
    { name: "Order", url: "#" },
    { name: "FAQ", url: "#" },
    { name: "Contact", url: "#" },
];

const templateLinks = [
    { name: "Style Guide", url: "https://www.google.com/" },
    { name: "Changelog", url: "https://www.google.com/" },
    { name: "Licence", url: "https://www.google.com/" },
    { name: "Webflow University", url: "https://www.google.com/" },
];

const flowbaseLinks = [
    { name: "More Cloneables", url: "#" }
];

class FooterLinks extends Component {
    renderLinks(links) {
        return (
            <ul>
                {links.map((link, index) => (
                    <li key={index}><a href={link.url}>{link.name}</a></li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className={styles.links}>
                <div>
                    <h4>COMPANY</h4>
                    {this.renderLinks(companyLinks)}
                </div>
                <div>
                    <h4>TEMPLATE</h4>
                    {this.renderLinks(templateLinks)}
                </div>
                <div>
                    <h4>FLOWBASE</h4>
                    {this.renderLinks(flowbaseLinks)}
                </div>
            </div>
        );
    }
}

export default FooterLinks;
