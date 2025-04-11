import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ links }) => {
    return (
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    {link.url.startsWith("/") ? (
                        <Link to={link.url}>{link.name}</Link>
                    ) : (
                        <a href={link.url}>{link.name}</a>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;