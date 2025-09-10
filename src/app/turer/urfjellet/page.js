import React from "react";
import Link from "next/link";

export default function UrfjelletPage() {
    return (
        <div className="text-center flex-center">
            <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
                <h1>Urfjellet</h1>
                
                <div className="relative">
                <img src="/urfjellet.jpg" alt="Urfjellet" className="rounded-full justify-center-safe set-h-[300px] "/>
                   </div>
                <p>Urfjellet sett i fra Koppen</p>
            </main>
        </div>
    );
}