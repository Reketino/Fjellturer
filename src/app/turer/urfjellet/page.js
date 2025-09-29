"use client";


import { useState } from "react";
import Rating from "@/components/Rating";
import Vaerdata from "@/components/Vaerdata";
import Image from "next/image";
// import UrfjelletMap from "@/components/UrrfjelletMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";

const UrfjelletMap = dynamic(() => import("@/components/UrrfjelletMap"), {
  ssr: false,
});

export default function UrfjelletPage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
        <div className="text-center flex-center">
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
        <p>Urfjellet sett fra Koppen</p>
        
        <RuteInfo
         rangering="RØD"
         rangeringFarge="text-red-500"
         hoydemeter={1267}
         vertikalStigning={1255}
         kilometer={9.75}
         tidsbruk="4-6 timer"
        />
        
        <h2 className="text-center text-xl font-extrabold">
            Her er ruten opp til Urfjellet.
           </h2>
        <UrfjelletMap />

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <Rating max={5} value={rating} onChange={setRating} />
          <p className="mt-2"> du ga {rating} stjerner</p>
        </div>
        <Vaerdata
          title="Urfjellet"
          lat={62.325179}
          lon={6.682832}
          altitude={1267}
        />
    </div>
      </main>
  );
}
