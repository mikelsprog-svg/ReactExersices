import React from 'react';
import { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);

// 2️⃣ Provider: envuelve la app y expone los valores
export function AppProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const [userName] = useState("Don Juan Tenorio");

    function toggleTheme() {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("light", next === "light");
            return next;
        });
    }

    return (
        <AppContext.Provider value={{ theme, toggleTheme, userName }}>
            {children}
        </AppContext.Provider>
    );
}

// 3️⃣ Hook de conveniencia para consumir el contexto
export function useAppContext() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error("useAppContext debe usarse dentro de <AppProvider>");
    return ctx;
}