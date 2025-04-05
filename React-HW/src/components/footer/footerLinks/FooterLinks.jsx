import React, { Component } from "react";
import styles from "./footerLinks.module.css";

class FooterLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyLinks: [
                { name: "Home", url: "#" },
                { name: "Order", url: "#" },
                { name: "FAQ", url: "#" },
                { name: "Contact", url: "#" },
            ],
            templateLinks: [
                { name: "Style Guide", url: "https://www.google.com/" },
                { name: "Changelog", url: "https://www.google.com/" },
                { name: "Licence", url: "https://www.google.com/" },
                { name: "Webflow University", url: "https://www.google.com/" },
            ],
            flowbaseLinks: [
                { name: "More Cloneables", url: "#" }
            ]
        };
    }

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
                    {this.renderLinks(this.state.companyLinks)}
                </div>
                <div>
                    <h4>TEMPLATE</h4>
                    {this.renderLinks(this.state.templateLinks)}
                </div>
                <div>
                    <h4>FLOWBASE</h4>
                    {this.renderLinks(this.state.flowbaseLinks)}
                </div>
            </div>
        );
    }
}

export default FooterLinks;
