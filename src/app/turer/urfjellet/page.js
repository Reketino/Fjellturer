"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Rating from "@/components/Rating";
import Værdata from "@/components/Værdata";
import Image from "next/image";
import UrfjelletMap from "@/components/UrrfjelletMap";

export default function UrfjelletPage() {
  const [rating, setRating] = useState(0);

  return (
    <div className="text-center flex-center">
      <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
        <h1>Urfjellet</h1>

        <div className="relative">
          <Image
            src="/urfjellet.jpg"
            alt="Urfjellet"
            width={800}
            height={400}
            className="rounded-full justify-center-safe set-h-[300px] "
          />
        </div>
        <p>Urfjellet sett i fra Koppen</p>
        
        <h2 className="text-center text-xl font-extrabold">
            Her er ruten opp til Urfjellet.
           </h2>
        <UrfjelletMap />

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <Rating max={5} value={rating} onChange={setRating} />
          <p className="mt-2"> du ga {rating} stjerner</p>
        </div>
        <Værdata
          title="Urfjellet"
          lat={62.325179}
          lon={6.682832}
          altitude={1267}
        />
      </main>
    </div>
  );
}
