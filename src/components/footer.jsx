import React from "react";

export default function Footer() {
    return (
        <footer className="bottom-0 left-0 w-screen h-10 flex items-center z-50 text-black dark:text-white">
            <p>&copy; {new Date().getFullYear()} Sykkylven Fjell og Turer. All rights reserved.</p>
        </footer>
    );
}
