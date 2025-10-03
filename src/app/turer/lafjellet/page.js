"use client";

import { useState } from "react";
import Rating from "@/components/Rating";
import Vaerdata from "@/components/Vaerdata";
import Image from "next/image";
// import LafjelletMap from "@/components/LafjelletMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";

const LafjelletMap = dynamic(() => import("@/components/LafjelletMap"), {
  ssr: false,
});

export default function LafjelletPage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center flex-1 ">
      <div className="text-center flex-center">
        <h1 className="text-4xl font-bold mb-4">Lafjellet</h1>

        <div className="relative w-200 h-200">
          <Image
            src="/Lafjellet.png"
            alt="Lafjellet"
            width={1600}
            height={900}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <p className="font-serif italic mb-4 mt-6">
          Baksiden av Lafjellet sett i fra parkeringen hvor man starter
        </p>
        <RuteInfo
          rangering="RØD"
          rangeringFarge="text-red-500"
          hoydemeter={1161}
          vertikalStigning={856}
          kilometer={6.62}
          tidsbruk="2-3 timer"
        />
        <section className="flex flex-col md:flex-row gap-6 mt-2">
          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <p className="mt-4">
              Etter man har fått parkert, starter turen opp denne grusveien som
              man ser her.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1758908015427!6m8!1m7!1s_VSzZ3vuEMbSmIbWOqTcGA!2m2!1d62.32814944238157!2d6.758293178381267!3f290.1921148800171!4f2.4877391115190335!5f3.123130152753552"
              className="w-full h-64 sm:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <h2 className="text-center text-xl font-extrabold mb-2">
          Her er ruten til Lafjellet.
        </h2>
         <div className="items-center flex justify-center w-full">
           <LafjelletMap />
         </div>

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <div className="flex justify-center">
            <Rating max={5} value={rating} onChange={setRating} />
          </div>
          <p className="mt-2"> du ga {rating} stjerner</p>
        </div>
        <Vaerdata
          title="Lafjellet"
          lat={62.32777}
          lon={6.712563}
          altitude={1161}
        />
      </div>
    </main>
  );
}
