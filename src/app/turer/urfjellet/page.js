"use client";

import { useState } from "react";
import Rating from "@/components/Rating";
import Vaerdata from "@/components/Vaerdata";
import Image from "next/image";
// import UrfjelletMap from "@/components/UrrfjelletMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";
import Koppen from "@/components/Koppen";

const UrfjelletMap = dynamic(() => import("@/components/UrrfjelletMap"), {
  ssr: false,
});

export default function UrfjelletPage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
      <div className="text-center flex-center">
        <h1 className="text-4xl font-bold mb-4">Urfjellet</h1>

        <div className="relative flex justify-center">
          <Image
            src="/urfjellet.jpg"
            alt="Urfjellet"
            width={800}
            height={400}
            className="rounded-full set-h-[300px] object-cover"
          />
        </div>
        <p className="font-serif italic mb-4 mt-2">Urfjellet sett fra Koppen</p>
        
        <p className="text-center font-serif italic mb-4 mt-4">
        Urfjellet på 1267, er enda en av de mange flotte & lengre turene fra Velledalen.
        På toppen vil man få en fantastisk utsikt over Hammarsettindene, Langeneset og ned mot Sykkylven!.
      </p>

        <RuteInfo
          rangering="RØD"
          rangeringFarge="text-red-500"
          hoydemeter={1267}
          vertikalStigning={1255}
          kilometer={9.75}
          tidsbruk="4-6 timer"
        />


        <div className="mt-6 flex flex-col items-center mb-4">
          <h2 className="font-semibold text-center">
            Her er ruten til Koppen:
          </h2>
          <Koppen />
        </div>

        <h2 className="text-center text-xl font-extrabold">
          Her er ruten opp til Urfjellet.
        </h2>
        <div className="items-center flex justify-center w-full">
          <UrfjelletMap />
        </div>

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <div className="flex justify-center">
            <Rating max={5} value={rating} onChange={setRating} />
          </div>
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
