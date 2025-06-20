import React, { createContext, useState, useEffect, ReactNode } from "react";
import type { Theme, ThemeContextType } from "./ThemeContext.d"

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    return stored ?? "light";
    });

    useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
    );
};
