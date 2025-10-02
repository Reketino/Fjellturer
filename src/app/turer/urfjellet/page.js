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
        
        <p className="text-center font-serif italic mb-2 mt-4">
        Urfjellet på 1267, er enda en av de mange flotte & lengre turene fra Velledalen.
      </p>
      <p className="text-center font-serif italic mb-4 mt-2">
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
        <p className="text-center mt-4">
          Turen starter fra parkeringen, som man ser ligger opp her.
        </p>

           
            <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
       <iframe 
       src="https://www.google.com/maps/embed?pb=!4v1759416354794!6m8!1m7!1sVB8tHFsEs5ySb0u_Z5tLfA!2m2!1d62.29194116728266!2d6.657225408158998!3f57.65601464103331!4f7.634504413804564!5f2.347694816175464" 
       className="w-[600px] h-64 sm:h-96"
       style={{ border: 0 }}
       allowFullScreen 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"
       />
       <p className="text-center font-semibold mt-2">Parkeringen🅿️.</p>
       </div>
        
        <p className="text-center mt-4">
          Etter man har parkert går turen først til Koppen, som du finner beskrivelse på her⬇️.
        </p>

        <div className="mt-4 flex flex-col items-center mb-4">
          <h2 className="font-semibold text-center">
            Her er ruten til Koppen:
          </h2>
          <Koppen />
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
          <p className="text-center  mt-2 mb-2">
            Etter man har komt på Koppen, følger man god sti videre mot Svadfjellet.
          </p>
          <Image
            src="/Svadfjellet.gif"
            alt="Svadfjellet sett fra Koppen"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            unoptimized
          />
          <p className="text-center font-semibold  mb-2">
            Her ser man Svadfjellet fra Koppen.
          </p>
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
