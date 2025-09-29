"use client";


import { useState } from "react";
import Rating from "@/components/Rating";
import Vaerdata from "@/components/Vaerdata";
// import HoletindeneMap from "@/components/HoletindeneMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";

const HoletindeneMap = dynamic(() => import("@/components/HoletindeneMap"), {
  ssr: false,
});

export default function HoletindenePage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
    <div className="text-center">
      
        <h1>Holetindene</h1>
        <p>
          Holetindene finner du i vakre Velledalen, som er en 10 minutters kjøretur
          fra sentrum av Sykkylven.
        </p>
        <RuteInfo
                 rangering="RØD"
                 rangeringFarge="text-red-500"
                 hoydemeter={1242}
                 vertikalStigning={1160}
                 kilometer={10.68}
                 tidsbruk="3-5 timer"
                />

          <h2 className="text-center text-xl font-extrabold">
            Her er ruten opp til Holetindene.
           </h2>
           <HoletindeneMap />

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <Rating max={5} value={rating} onChange={setRating} />
          <p className="mt-2"> du ga {rating} stjerner</p>
        </div>

        <Vaerdata
          title="Holetindene"
          lat={62.282961}
          lon={6.724356}
          altitude={1242}
        />
        </div>
      </main>
    
  );
}
