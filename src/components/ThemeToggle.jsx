"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState (false);

    useEffect(() => {
        setDark(document.documentElement.classList.contains("dark"));
    }, []);

   const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(document.documentElement.classList.contains("dark"));
   };

    return (
    <button
    onClick={toggleTheme}
    className="px-4 py-2 rounded-lg border bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
        {dark ? "☀️ Lys" : "🌙 Mørk"}
    </button>

    );
}
