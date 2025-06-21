import React, { createContext, useState, useEffect, ReactNode } from "react";
import type { Theme, ThemeContextType } from "./ThemeContext.d";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        return stored ?? "light";
    });

    useEffect(() => {
  const root = document.documentElement;

  // добавляем класс для анимации
  root.classList.add("theme-transition");
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // убираем через 400мс
  const timeout = setTimeout(() => {
    root.classList.remove("theme-transition");
  }, 400);

  return () => clearTimeout(timeout);
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
