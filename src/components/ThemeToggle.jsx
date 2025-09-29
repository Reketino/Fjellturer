"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState ("light");

    useEffect(() => {
       if (typeof window !== "undefined") {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        }
       }
    }, []);

function toggleTheme() {
    const next = theme == "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);
    }
}
   
    return (
    <button
    onClick={toggleTheme}
    className="rounded px-3 py-1 border bg-background text-foreground"
    >
        {theme == "light" ? "☀️ Light" : "🌙 Dark"}
    </button>

    );
}
