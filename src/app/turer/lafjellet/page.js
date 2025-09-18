"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Rating from "@/components/Rating";

export default function LafjelletPage() {
    const [rating, setRating] =useState (0);

    return (
        <div className="text-center flex-center">
            <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
                <h1>Lafjellet</h1>
               
                <div className="relative">
                <img src="/lafjellet.png" alt="Lafjellet" className="rounded-full justify-center-safe set-h-[300px] "/>
                    <p>Baksiden av Lafjellet sett i fra parkeringen hvor man starter</p>
                   </div>
                <div className="p-8">
                        <p>Hvor godt likte du forklaringen?</p>
                        <Rating max={5} value={rating} onChange={setRating} />
                        <p className="mt-2"> du ga {rating} stjerner</p>
                        </div>
                

            </main>
        </div>
    );
}